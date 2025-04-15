using DataAccess.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DataAccess.SeedConfiguration;
public class UserConfiguration : IEntityTypeConfiguration<DuutyUser>
{
    public void Configure(EntityTypeBuilder<DuutyUser> builder)
    {
        var hasher = new PasswordHasher<DuutyUser>();

        var adminUser = new DuutyUser
        {
            Id = DuutySeedConstants.AdminUserId,
            UserName = "admin@duuty.com",
            NormalizedUserName = "ADMIN@DUUTY.COM",
            Email = "admin@duuty.com",
            NormalizedEmail = "ADMIN@DUUTY.COM",
            EmailConfirmed = true,
            SecurityStamp = Guid.NewGuid().ToString("D")
        };
        adminUser.PasswordHash = hasher.HashPassword(adminUser, "Admin@123");

        var employerUser = new DuutyUser
        {
            Id = DuutySeedConstants.EmployerUserId,
            UserName = "employer@duuty.com",
            NormalizedUserName = "EMPLOYER@DUUTY.COM",
            Email = "employer@duuty.com",
            NormalizedEmail = "EMPLOYER@DUUTY.COM",
            EmailConfirmed = true,
            SecurityStamp = Guid.NewGuid().ToString("D")
        };
        employerUser.PasswordHash = hasher.HashPassword(employerUser, "Employer@123");

        builder.HasData(adminUser, employerUser);
    }
}

