using Application;
using FastEndpoints;
using Infrastructure;
using Microsoft.AspNetCore.Identity;

var builder = WebApplication.CreateBuilder(args);
var configuration = builder.Configuration;

if (configuration is null)
{
    throw new ArgumentNullException($"{nameof(configuration)}, cannot be null");
}

// Add services to the container.
builder.Services.AddHealthChecks();
builder.Services.AddFastEndpoints();

// Include Application Dependency
builder.Services.AddApplicationServices()
                .AddInfrastructure(configuration);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddAuthorization();
builder.Services.AddAuthentication()
    .AddBearerToken(IdentityConstants.BearerScheme);

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapHealthChecks("/health");
app.UseHttpsRedirection();

app.UseAuthentication();

app.UseAuthorization();

app.MapFallbackToFile("/index.html");
app.UseFastEndpoints();
app.Run();
