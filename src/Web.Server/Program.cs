using Application;
using DataAccess.Identity;
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

// Include Application Dependency
builder.Services.AddApplicationServices();
// Include Infrastructure Dependency
builder.Services.AddInfrastructure(configuration);
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

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
app.MapIdentityApi<DuutyUser>().WithTags("Identity Management");

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
