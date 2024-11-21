# ASP.NET Core Web App with React

This repository contains a full-stack web application built with **ASP.NET Core** (backend) and **React** (frontend). It is configured for deployment to **Azure App Service** using **GitHub Actions**.

---

## Features

- ASP.NET Core backend with Web API.
- React frontend for modern UI.
- Continuous Deployment via GitHub Actions.
- Azure App Service integration with database support.

---

## Prerequisites

Before running or deploying the project, ensure the following tools are installed:

- [.NET SDK 8.0+](https://dotnet.microsoft.com/download/dotnet)
- [Node.js (20+)](https://nodejs.org/)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)
- [Azure Account](https://azure.microsoft.com/)

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/ArainItTechnologies/duuty.git
cd duuty
```
### 2. Configure the Database
Update the connection string in your appsettings.json file:

```
{
  "ConnectionStrings": {
    "DuutyAppDbContext": "<Your SQL Server Connection String>"
  }
}

```

### 3. Install Dependencies

#### Backend

```
cd DuutyApp.Server
dotnet restore
```

#### Frontend
```
cd duutyapp.client
npm install
```

### 4. Run the Project

```
cd DuutyApp.Server
dotnet run
```

since frontend is a linked project running backend will run frontend too.

Visit the application at https://localhost:5173.

## Deployment with GitHub Actions

#### Secrets Configuration
To deploy using GitHub Actions, add the following secrets to your repository:

AZURE_WEBAPP_PUBLISH_PROFILE: Your Azure Web App publish profile.
DATABASE_CONNECTION_STRING: Your Azure SQL Database connection string.

#### Adding Secrets
Go to **Settings > Secrets and variables > Actions > New repository secret**.

#### Add the following:


##### Name: **AZURE_WEBAPP_PUBLISH_PROFILE**, Value: Paste the content of your publish profile.
##### Name: **DATABASE_CONNECTION_STRING**, Value: Paste your database connection string.

