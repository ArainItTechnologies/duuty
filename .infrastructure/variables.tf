variable "resource_group_name" {
  default = "rg-duuty-dev"
}

variable "location" {
  default = "West US"
}

variable "app_service_plan_name" {
  default = "asp-duuty-dev"
}

variable "app_service_name" {
  default = "duuty-dev"
}

variable "storage_account_name" {
  default = "duutystodev"
}

variable "storage_account_sku" {
  default = "LRS"
}

variable "sql_server_name" {
  description = "The name of the SQL Server"
  type        = string
}

variable "sql_database_name" {
  description = "The name of the SQL Database"
  type        = string
}

variable "sql_admin_username" {
  description = "The admin username for the SQL Server"
  type        = string
}

variable "sql_admin_password" {
  description = "The admin password for the SQL Server"
  type        = string
  sensitive   = true
}

variable "subscription_id" {}
variable "tenant_id" {}
variable "client_id" {}
variable "client_secret" {}