variable "regions" {
  description = "List of regions to deploy Cloud Run jobs"
  type        = list(string)
  default     = ["asia-southeast2", "us-east1", "us-west1", "europe-west2", "europe-central2", "southamerica-east1", "asia-south1", "asia-northeast1"]
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
