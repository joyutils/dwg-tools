variable "regions" {
  description = "List of regions to deploy Cloud Run jobs"
  type        = list(string)
  default     = ["us-east4", "us-west1", "southamerica-west1", "southamerica-east1", "europe-central2", "europe-southwest1", "me-west1", "asia-south2", "asia-southeast2", "asia-northeast3"]
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

module "cloud_run_job" {
  source   = "./modules/cloud_run_job_module"
  for_each = toset(var.regions)

  region = each.value
  elastic_url = var.elastic_url
  elastic_username = var.elastic_username
  elastic_password = var.elastic_password
}
