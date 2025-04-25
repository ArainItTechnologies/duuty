using DataAccess.Entities;
using DataAccess.Identity;
using DataAccess.SeedConfiguration;
using Infrastructure.SeedConfiguration;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data;

public class ApplicationDbContext : IdentityDbContext<DuutyUser, DuutyRole, string>
{
    public ApplicationDbContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<Organisation> Organisations { get; set; }
    public DbSet<Address> Addresses { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Organisation → DuutyUser (1-to-many)
        modelBuilder.Entity<DuutyUser>()
            .HasOne(u => u.Organisation)
            .WithMany(x => x.Users)
            .HasForeignKey(u => u.OrganisationId)
            .OnDelete(DeleteBehavior.SetNull);

        // Organisation → Address (1-to-many)
        modelBuilder.Entity<Address>()
            .HasOne(a => a.Organisation)
            .WithMany(o => o.Addresses)
            .HasForeignKey(a => a.OrganisationId)
            .OnDelete(DeleteBehavior.Cascade);

        // Ensure only one current address per Organisation (Index on IsCurrentAddress)
        modelBuilder.Entity<Address>()
            .HasIndex(a => new { a.OrganisationId, a.IsCurrentAddress })
            .IsUnique()
            .HasFilter("[IsCurrentAddress] = 1");

        modelBuilder.ApplyConfiguration(new OrganisationConfiguration());
        modelBuilder.ApplyConfiguration(new AddressConfiguration());
        modelBuilder.ApplyConfiguration(new RoleConfiguration());
        modelBuilder.ApplyConfiguration(new UserConfiguration());
        modelBuilder.ApplyConfiguration(new UserRoleConfiguration());
    }
}
