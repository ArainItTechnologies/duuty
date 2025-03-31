using Application;
using DataAccess.Identity;
using DuutyApp.Server;
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
// Include Infrastructure Dependency
builder.Services.AddInfrastructure(configuration);
builder.Services.AddControllers();
builder.Services.AddSingleton<Swashbuckle.AspNetCore.Swagger.ISwaggerProvider, SwaggerProvider>();
builder.Services.AddSwaggerGen();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddOpenApi();
builder.Services.AddAuthentication()
    .AddBearerToken(IdentityConstants.BearerScheme);

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseSwaggerUI(options => options.SwaggerEndpoint("/openapi/v1.json", "Duuty V1"));
}

app.UseDefaultFiles();
app.MapStaticAssets();

app.UseHttpsRedirection();
app.UseAuthorization();

app.MapIdentityApi<DuutyUser>().WithTags("Identity Management");
app.MapControllers();

app.Run();