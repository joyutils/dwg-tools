variable "region" {
  description = "The region where to deploy the Cloud Run job"
  type        = string
}

variable "elastic_url" {
  description = "The URL of the ElasticSearch instance"
  type        = string
}

variable "elastic_username" {
  description = "The username for the ElasticSearch instance"
  type        = string
}

variable "elastic_password" {
  description = "The password for the ElasticSearch instance"
  type        = string
}

resource "google_cloud_run_v2_job" "default" {
  provider = google-beta
  project  = "joyutils"
  name     = "dwg-ping-job-${var.region}"
  location = var.region

  template {
    template {
      containers {
        image = "europe-central2-docker.pkg.dev/joyutils/dwg/dwg-ping:0.5.0"

        env {
          name  = "ELASTICSEARCH_URL"
          value = var.elastic_url
        }
        env {
          name  = "ELASTICSEARCH_USERNAME"
          value = var.elastic_username
        }
        env {
          name  = "ELASTICSEARCH_PASSWORD"
          value = var.elastic_password
        }
        env {
          name  = "SOURCE_ID"
          value = "gcp-${var.region}"
        }
        env {
          name  = "SINGLE_RUN"
          value = "true"
        }
      }
    }
  }
}

# Cloud Scheduler Job
resource "google_cloud_scheduler_job" "scheduler" {
  provider    = google-beta
  name        = "scheduler-${google_cloud_run_v2_job.default.name}"
  description = "Scheduler for Cloud Run Job"
  region      = var.region
  schedule    = "*/10 * * * *"
  project     = "joyutils"

  http_target {
    http_method = "POST"
    uri         = "https://${google_cloud_run_v2_job.default.location}-run.googleapis.com/apis/run.googleapis.com/v1/namespaces/joyutils/jobs/${google_cloud_run_v2_job.default.name}:run"

    oauth_token {
      service_account_email = "1095089208019-compute@developer.gserviceaccount.com"
    }
  }

  depends_on = [resource.google_cloud_run_v2_job.default]
}
