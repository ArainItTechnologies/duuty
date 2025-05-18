using DataAccess.Identity;
using DataAccess.SeedConfiguration;
using Domain.Entities;
using Domain.Enums;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace DataAccess;

public class ApplicationDbContext : IdentityDbContext<ArainUser, ArainRole, string>
{
    public ApplicationDbContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<Organisation> Organisations { get; set; }
    public DbSet<Address> Addresses { get; set; }
    public DbSet<EmployerSubscription> Subscriptions { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<EmployerSubscription>(entity =>
        {
            entity.Property(e => e.Plan)
                .HasConversion(
                    v => v.ToString(),
                    v => (SubscriptionPlan)Enum.Parse(typeof(SubscriptionPlan), v));

            entity.Property(e => e.Status)
                .HasConversion(
                    v => v.ToString(),
                    v => (SubscriptionStatus)Enum.Parse(typeof(SubscriptionStatus), v));

            entity.Property(e => e.StartDate).IsRequired();
            entity.Property(e => e.ExpiryDate).IsRequired();
        });

        modelBuilder.ApplyConfiguration(new OrganisationConfiguration());
        modelBuilder.ApplyConfiguration(new AddressConfiguration());
        modelBuilder.ApplyConfiguration(new RoleConfiguration());
        modelBuilder.ApplyConfiguration(new UserConfiguration());
        modelBuilder.ApplyConfiguration(new UserRoleConfiguration());
    }
}
