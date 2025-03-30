using Application;
using DataAccess.Identity;
using DataAccess.Repository.Command;
using DataAccess.Repository.Query;
using Domain.Repository.Command;
using Domain.Repository.Query;
using Infrastructure.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using SharedKernel.AppSettings;
using SharedKernel.Interfaces;

namespace Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services,
        IConfiguration configuration)
    {
        services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(configuration.GetConnectionString("DuutyAppDbContext"),
            b => b.MigrationsAssembly("Infrastructure")
        ));

        services.Configure<SmtpConfig>(configuration.GetSection("SmtpConfig"));
        services.AddTransient<IEmailSender, EmailSender>();
        services.AddSingleton<ITimeProvider, Application.TimeProvider>();

        services.AddIdentityCore<DuutyUser>(options =>
        {
            options.SignIn.RequireConfirmedEmail = true;
        })
        .AddEntityFrameworkStores<ApplicationDbContext>()
        .AddApiEndpoints();

        services.Configure<IdentityOptions>(options =>
        {
            // Password settings.
            options.Password.RequireDigit = true;
            options.Password.RequireLowercase = true;
            options.Password.RequireNonAlphanumeric = true;
            options.Password.RequireUppercase = true;
            options.Password.RequiredLength = 6;
            options.Password.RequiredUniqueChars = 1;

            // Lockout settings.
            options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(5);
            options.Lockout.MaxFailedAccessAttempts = 5;
            options.Lockout.AllowedForNewUsers = true;

            // User settings.
            options.User.AllowedUserNameCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._@+";
            options.User.RequireUniqueEmail = true;
        });

        services.AddScoped(typeof(IQueryRepository<>), typeof(QueryRepository<>));
        services.AddScoped(typeof(ICommandRepository<>), typeof(CommandRepository<>));

        return services;
    }
}