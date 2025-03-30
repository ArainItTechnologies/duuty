using Application;
using DataAccess.Identity;
using Infrastructure;
using Microsoft.AspNetCore.Identity;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);
var configuration = builder.Configuration;

if (configuration is null)
{
    throw new ArgumentNullException($"{nameof(configuration)}, cannot be null");
}

// Include Application Dependency
builder.Services.AddApplicationServices();
// Include Infrastructure Dependency
builder.Services.AddInfrastructure(configuration);
builder.Services.AddControllers();

builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Duuty API", Version = "v1" });
});
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddAuthentication()
    .AddBearerToken(IdentityConstants.BearerScheme);

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Duuty API v1"));
}

app.UseDefaultFiles();
app.MapStaticAssets();

app.UseHttpsRedirection();
app.UseAuthorization();

app.MapIdentityApi<DuutyUser>().WithTags("Identity Management");
app.MapControllers();

app.Run();