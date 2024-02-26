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
  name     = "operators-ping-job-${var.region}"
  location = var.region

  template {
    template {
      containers {
        image = "europe-central2-docker.pkg.dev/joyutils/dwg/operators-ping:1.1.0"

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
        env {
          name  = "STORAGE_THUMBNAIL_TEST_OBJECT_ID_MAPPING"
          value = "1717519:0,1,2,3,7,14,18;1717714:4,8,10,11,12"
        }
        env {
          name  = "STORAGE_MEDIA_TEST_OBJECT_ID_MAPPING"
          value = "1717518:0,1,2,3,7,14,18;1717713:4,8,10,11,12"
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
  region      = "europe-west1"
  schedule    = "*/20 * * * *"
  project     = "joyutils"

  http_target {
    http_method = "POST"
    uri         = "https://${var.region}-run.googleapis.com/apis/run.googleapis.com/v1/namespaces/joyutils/jobs/${google_cloud_run_v2_job.default.name}:run"

    oauth_token {
      service_account_email = "1095089208019-compute@developer.gserviceaccount.com"
    }
  }

  depends_on = [resource.google_cloud_run_v2_job.default]
}
