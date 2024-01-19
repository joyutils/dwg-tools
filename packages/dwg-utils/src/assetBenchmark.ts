export type SuccessBenchmarkResult = {
  status: "success";
  ttfb: number;
  totalRequestTime: number;
  downloadTime: number;
  downloadSize: number;
  downloadSpeedBps: number;
  dnsLookupTime?: number;
  sslTime?: number;
  processingTime?: number;
  url: string;
  cacheStatus: string;
};

export type ErrorBenchmarkResult = {
  status: "error";
  url: string;
  error: string;
  statusCode?: number;
};

export type BenchmarkResult = SuccessBenchmarkResult | ErrorBenchmarkResult;

const TOTAL_REQUEST_TIMEOUT = 20000;
const INITIAL_RESPONSE_TIMEOUT = 5000;

async function withTimeout<T>(
  promise: Promise<T>,
  timeout: number,
): Promise<T> {
  return new Promise(async (resolve, reject) => {
    const timeoutId = setTimeout(
      () => reject(new Error("unexpected timeout")),
      timeout,
    );
    try {
      const result = await promise;
      clearTimeout(timeoutId);
      resolve(result);
    } catch (e) {
      clearTimeout(timeoutId);
      reject(e);
    }
  });
}

export async function runAssetBenchmark(
  url: string,
  maxDownloadSize: number,
  numRuns = 1,
  debug = false,
): Promise<BenchmarkResult> {
  if (numRuns < 1) {
    throw new Error("numRuns must be at least 1");
  }

  const results: BenchmarkResult[] = [];
  for (let i = 0; i < numRuns; i++) {
    try {
      const result = await withTimeout(
        runSingleBenchmark(url, maxDownloadSize, TOTAL_REQUEST_TIMEOUT, debug),
        TOTAL_REQUEST_TIMEOUT + 2000,
      );
      results.push(result);
    } catch (e) {
      results.push({
        status: "error",
        url,
        error: (e as any)?.message,
      });
    }
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
  return aggregateBenchmarkResults(results);
}

async function runSingleBenchmark(
  url: string,
  maxDownloadSize: number,
  maxTime: number,
  debug = false,
): Promise<BenchmarkResult> {
  try {
    const controller = new AbortController();
    const signal = controller.signal;
    const responseTimeoutId = setTimeout(() => {
      return controller.abort();
    }, INITIAL_RESPONSE_TIMEOUT);

    const startFetchTime = performance.now();
    const headers = new Headers({
      Range: `bytes=0-${maxDownloadSize - 1}`,
      "Cache-Control": "no-cache",
    });
    const response = await fetch(url, { signal, headers });
    clearTimeout(responseTimeoutId);

    const responseStartTime = performance.now();

    if (!response.ok) {
      return {
        status: "error",
        url,
        error: `Failed with status ${response.status} ${response.statusText}`,
        statusCode: response.status,
      };
    }

    let receivedSize = 0;
    const reader = response.body?.getReader();
    if (!reader) {
      return {
        status: "error",
        url,
        error: "No reader found",
      };
    }
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      receivedSize += value?.byteLength ?? 0;
      if (performance.now() - responseStartTime > maxTime) {
        reader.cancel();
        controller.abort();
        break;
      }
    }
    const endFetchTime = performance.now();
    const readTime = endFetchTime - responseStartTime;

    let ttfb = responseStartTime - startFetchTime;
    let totalRequestTime = endFetchTime - startFetchTime;
    let downloadTime = readTime;

    if (debug) {
      console.log({
        startFetchTime,
        responseStartTime,
        endFetchTime,
        readTime,
        ttfb,
        totalRequestTime,
        downloadTime,
      });
    }

    if (ttfb < 0) {
      ttfb = responseStartTime - startFetchTime;
    }

    if (totalRequestTime < 0) {
      totalRequestTime = endFetchTime - startFetchTime;
    }

    if (downloadTime < 0) {
      downloadTime = readTime;
    }

    if (totalRequestTime < 5) {
      // too good to be true
      return {
        status: "error",
        url,
        error: "request time below 5ms",
      };
    }

    const downloadSpeedBps =
      (receivedSize * 8) / (Math.max(downloadTime, 1) / 1000); // bits per second
    if (downloadSpeedBps > 1e9) {
      // too good to be true
      return {
        status: "error",
        url,
        error: "download speed above 1Gbps",
      };
    }

    return {
      status: "success",
      ttfb,
      totalRequestTime,
      downloadTime,
      downloadSpeedBps,
      downloadSize: receivedSize,
      url: url,
      cacheStatus: response.headers.get("X-Cache") || "unknown",
    };
  } catch (e) {
    return {
      status: "error",
      url,
      error: (e as any)?.message,
    };
  }
}

function aggregateBenchmarkResults(
  results: BenchmarkResult[],
): BenchmarkResult {
  const successResults = results.filter(
    (r) => r.status === "success",
  ) as SuccessBenchmarkResult[];

  if (successResults.length === 0) {
    return results[0];
  }

  const cachedResults = successResults.filter((r) => r.cacheStatus === "HIT");

  if (cachedResults.length === 0) {
    return getAverageSuccessBenchmarkResult(successResults);
  }

  return getAverageSuccessBenchmarkResult(cachedResults);
}

function getAverageSuccessBenchmarkResult(
  results: SuccessBenchmarkResult[],
): BenchmarkResult {
  const getAverage = (key: keyof SuccessBenchmarkResult) =>
    results.reduce((acc, r) => {
      const value = r[key] ?? 0;
      return acc + (value as number);
    }, 0) / results.length;

  const averageTtfb = getAverage("ttfb");
  const averageTotalRequestTime = getAverage("totalRequestTime");
  const averageDownloadTime = getAverage("downloadTime");
  const averageDownloadSize = getAverage("downloadSize");
  const averageDownloadSpeedBps = getAverage("downloadSpeedBps");
  const averageDnsLookupTime = getAverage("dnsLookupTime");
  const averageSslTime = getAverage("sslTime");
  const averageProcessingTime = getAverage("processingTime");

  return {
    status: "success",
    ttfb: averageTtfb,
    totalRequestTime: averageTotalRequestTime,
    downloadTime: averageDownloadTime,
    downloadSize: averageDownloadSize,
    downloadSpeedBps: averageDownloadSpeedBps,
    dnsLookupTime: averageDnsLookupTime,
    sslTime: averageSslTime,
    processingTime: averageProcessingTime,
    url: results[0].url,
    cacheStatus: results[0].cacheStatus,
  };
}
