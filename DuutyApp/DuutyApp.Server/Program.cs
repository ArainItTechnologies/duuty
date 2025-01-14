using DuutyApp.Data;
using DuutyApp.Data.Models;
using DuutyApp.Interfaces;
using DuutyApp.Service;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);
var configuration = builder.Configuration;

if (configuration is null)
{
    throw new ArgumentNullException($"{nameof(configuration)}, cannot be null");
}

// Add DbContext
builder.Services.AddDbContext<DuutyAppDbContext>(options =>
    options.UseSqlServer(
        configuration.GetConnectionString("DuutyAppDbContext"),
        sqlOptions => sqlOptions.EnableRetryOnFailure()));

// Add Identity
builder.Services.AddIdentity<IdentityUser, IdentityRole>()
    .AddEntityFrameworkStores<DuutyAppDbContext>()
    .AddDefaultTokenProviders();

// Add services to the container.
builder.Services.Configure<JwtSettings>(configuration.GetSection(nameof(JwtSettings)));
builder.Services.Configure<TwilioSettings>(configuration.GetSection(nameof(TwilioSettings)));

builder.Services.AddServicesIoC();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidIssuer = configuration["JwtSettings:Issuer"],
            ValidAudience = configuration["JwtSettings:Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JwtSettings:SecretKey"]!))
        };
    });


var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Seed users and roles
using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    var seedUserConfigs = configuration.GetSection("SeedUserConfigs").Get<List<SeedUserConfig>>();
    await DuutyDbInitializer.SeedUsersAndRolesAsync(services, seedUserConfigs!);
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
