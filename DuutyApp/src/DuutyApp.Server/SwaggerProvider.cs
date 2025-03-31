using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.Swagger;

namespace DuutyApp.Server;

public class SwaggerProvider : ISwaggerProvider
{
    public OpenApiDocument GetSwagger(string documentName, string? host = null, string? basePath = null)
    {
        // Verify the document name is provided
        if (string.IsNullOrWhiteSpace(documentName))
        {
            throw new ArgumentNullException(nameof(documentName));
        }

        // Create a new OpenAPI document
        var openApiDocument = new OpenApiDocument
        {
            Info = new OpenApiInfo
            {
                Title = "Duuty API",
                Version = documentName,
                Description = "API documentation for the Duuty application"
            },
            Servers = new List<OpenApiServer>(),
            Paths = new OpenApiPaths(),
            Components = new OpenApiComponents
            {
                Schemas = new Dictionary<string, OpenApiSchema>(),
                SecuritySchemes = new Dictionary<string, OpenApiSecurityScheme>()
            }
        };

        // Add server information if host is provided
        if (!string.IsNullOrEmpty(host))
        {
            var serverUrl = host;
        
            // Append basePath if provided
            if (!string.IsNullOrEmpty(basePath))
            {
                // Ensure basePath starts with a forward slash
                if (!basePath.StartsWith("/"))
                {
                    basePath = "/" + basePath;
                }
            
                serverUrl = $"{host}{basePath}";
            }
        
            openApiDocument.Servers.Add(new OpenApiServer { Url = serverUrl });
        }

        // Add basic security scheme (e.g., Bearer token)
        openApiDocument.Components.SecuritySchemes.Add("Bearer", new OpenApiSecurityScheme
        {
            Type = SecuritySchemeType.Http,
            Scheme = "bearer",
            BearerFormat = "JWT",
            Description = "JWT Authorization header using the Bearer scheme."
        });

        // Return the OpenAPI document
        return openApiDocument;
    }
}