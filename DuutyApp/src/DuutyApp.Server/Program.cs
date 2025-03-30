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

// Include Application Dependency
builder.Services.AddApplicationServices();
// Include Infrastructur Dependency
builder.Services.AddInfrastructure(configuration);
builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddOpenApi();
builder.Services.AddAuthentication()
    .AddBearerToken(IdentityConstants.BearerScheme);

var app = builder.Build();

app.UseDefaultFiles();
app.MapStaticAssets();

app.MapOpenApi();

app.UseHttpsRedirection();
app.UseAuthorization();

app.MapIdentityApi<DuutyUser>().WithTags("Identity Management");
app.MapControllers();

app.Run();