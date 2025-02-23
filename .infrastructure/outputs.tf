output "app_service_url" {
  value = azurerm_linux_web_app.app_service.default_hostname
}

output "storage_account_name" {
  value = azurerm_storage_account.storage_account.name
}