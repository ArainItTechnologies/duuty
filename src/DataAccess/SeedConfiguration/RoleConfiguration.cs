using DataAccess.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DataAccess.SeedConfiguration;

public class RoleConfiguration : IEntityTypeConfiguration<ArainRole>
{
    public void Configure(EntityTypeBuilder<ArainRole> builder)
    {
        builder.HasData(
            new ArainRole
            {
                Id = "A1B2C3D4-E5F6-7890-1234-56789ABCDEF0",
                Name = "Admin",
                NormalizedName = "ADMIN",
                Description = "Administrator role with full access to the system."
            },
            new ArainRole
            {
                Id = "B2C3D4E5-F678-9012-3456-789ABCDEFA1B",
                Name = "User",
                NormalizedName = "USER",
                Description = "Standard user role with limited access to the system."
            },
            new ArainRole
            {
                Id = "C3D4E5F6-7890-1234-5678-9ABCDEFA1B2C",
                Name = "Employer",
                NormalizedName = "EMPLOYER",
                Description = "Employer role with access to manage job postings and applications."
            },
            new ArainRole
            {
                Id = "D4E5F678-9012-3456-789A-BCDEFA1B2C3D",
                Name = "Manager",
                NormalizedName = "MANAGER",
                Description = "Manager role with access to oversee operations and manage teams."
            }
        );
    }
}
