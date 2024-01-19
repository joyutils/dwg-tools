import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://query.joystream.org/graphql",
  documents: ["src/**/*.ts"],
  ignoreNoDocuments: true, // for better experience with the watcher
  emitLegacyCommonJSImports: false,
  generates: {
    "./src/gql/": {
      preset: "client",
    },
  },
};

export default config;
