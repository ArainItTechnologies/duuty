using DuutyApp.Data.Enums;
using DuutyApp.Data.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;

namespace DuutyApp.Data;

public static class DuutyDbInitializer
{
    public static async Task SeedUsersAndRolesAsync(IServiceProvider serviceProvider, List<SeedUserConfig> seedUserConfigs)
    {
        var roleManager = serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();
        var userManager = serviceProvider.GetRequiredService<UserManager<IdentityUser>>();

        foreach (var role in Enum.GetValues(typeof(RoleNames)).Cast<RoleNames>())
        {
            var roleName = role.ToString();
            if (!await roleManager.RoleExistsAsync(roleName))
            {
                await roleManager.CreateAsync(new IdentityRole(roleName));
            }
        }

        // Seed Users
        foreach (var config in seedUserConfigs)
        {
            var user = await userManager.FindByEmailAsync(config.UserName);
            if (user == null)
            {
                user = new IdentityUser
                {
                    UserName = config.UserName,
                    Email = config.UserName,
                    EmailConfirmed = true
                };
                var result = await userManager.CreateAsync(user, config.Password);
                if (!result.Succeeded)
                {
                    throw new Exception($"Failed to create user '{config.UserName}': {string.Join(", ", result.Errors.Select(e => e.Description))}");
                }

                // Assign Roles
                if (config.UserName.Contains("admin", StringComparison.OrdinalIgnoreCase))
                {
                    await userManager.AddToRoleAsync(user, RoleNames.Admin.ToString());
                }
                else if (config.UserName.Contains("superadmin", StringComparison.OrdinalIgnoreCase))
                {
                    await userManager.AddToRoleAsync(user, RoleNames.SuperAdmin.ToString());
                }
            }
        }
    }
}
