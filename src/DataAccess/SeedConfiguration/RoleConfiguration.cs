using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataAccess.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.SeedConfiguration;
public class RoleConfiguration : IEntityTypeConfiguration<DuutyRole>
{
    public void Configure(EntityTypeBuilder<DuutyRole> builder)
    {
        builder.HasData(
            new DuutyRole
            {
                Id = "A1B2C3D4-E5F6-7890-1234-56789ABCDEF0",
                Name = "Admin",
                NormalizedName = "ADMIN",
                Description = "Administrator role with full access to the system."
            },
            new DuutyRole
            {
                Id = "B2C3D4E5-F678-9012-3456-789ABCDEFA1B",
                Name = "User",
                NormalizedName = "USER",
                Description = "Standard user role with limited access to the system."
            },
            new DuutyRole
            {
                Id = "C3D4E5F6-7890-1234-5678-9ABCDEFA1B2C",
                Name = "Employer",
                NormalizedName = "EMPLOYER",
                Description = "Employer role with access to manage job postings and applications."
            },
            new DuutyRole
            {
                Id = "D4E5F678-9012-3456-789A-BCDEFA1B2C3D",
                Name = "Manager",
                NormalizedName = "MANAGER",
                Description = "Manager role with access to oversee operations and manage teams."
            }
        );
    }
}
