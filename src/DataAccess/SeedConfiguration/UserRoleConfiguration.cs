using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DataAccess.SeedConfiguration;

public class UserRoleConfiguration : IEntityTypeConfiguration<IdentityUserRole<string>>
{
    public void Configure(EntityTypeBuilder<IdentityUserRole<string>> builder)
    {
        builder.HasData(
            new IdentityUserRole<string>
            {
                UserId = DuutySeedConstants.AdminUserId,
                RoleId = DuutySeedConstants.AdminRoleId
            },
            new IdentityUserRole<string>
            {
                UserId = DuutySeedConstants.EmployerUserId,
                RoleId = DuutySeedConstants.EmployerRoleId
            }
        );
    }
}

