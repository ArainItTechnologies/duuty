using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;

namespace DuutyApp.Data;

public static class DuutyDbInitializer
{
    public static async Task SeedUsersAndRolesAsync(IServiceProvider serviceProvider)
    {
        var roleManager = serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();
        var userManager = serviceProvider.GetRequiredService<UserManager<IdentityUser>>();

        // Roles
        string[] roleNames = { "Admin", "SuperAdmin" };
        foreach (var roleName in roleNames)
        {
            if (!await roleManager.RoleExistsAsync(roleName))
            {
                await roleManager.CreateAsync(new IdentityRole(roleName));
            }
        }

        // Admin User
        var adminUser = await userManager.FindByEmailAsync("admin@duuty.in");
        if (adminUser == null)
        {
            adminUser = new IdentityUser { UserName = "admin@duuty.in", Email = "admin@duuty.in", EmailConfirmed = true };
            await userManager.CreateAsync(adminUser, "Admin@123"); // Change password as needed
            await userManager.AddToRoleAsync(adminUser, "Admin");
        }

        // Super Admin User
        var superAdminUser = await userManager.FindByEmailAsync("superadmin@duuty.in");
        if (superAdminUser == null)
        {
            superAdminUser = new IdentityUser { UserName = "superadmin@duuty.in", Email = "superadmin@duuty.in", EmailConfirmed = true };
            await userManager.CreateAsync(superAdminUser, "SuperAdmin@123"); // Change password as needed
            await userManager.AddToRoleAsync(superAdminUser, "SuperAdmin");
        }
    }
}
