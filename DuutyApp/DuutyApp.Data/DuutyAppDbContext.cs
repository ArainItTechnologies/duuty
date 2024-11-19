using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using DuutyApp.Data.Entities;

namespace DuutyApp.Data
{
    public class DuutyAppDbContext : IdentityDbContext<IdentityUser>
    {
        public DuutyAppDbContext(DbContextOptions<DuutyAppDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            SeedRoles(modelBuilder);
        }

        public DbSet<Applicant> Applicants { get; set; }

        private void SeedRoles(ModelBuilder builder)
        {
            builder.Entity<IdentityRole>()
                .HasData(new IdentityRole
                {
                    Name = "SuperAdmin",
                    ConcurrencyStamp = "1",
                    NormalizedName = "SuperAdmin"
                },new IdentityRole
                {
                    Name = "Admin",
                    ConcurrencyStamp = "2",
                    NormalizedName = "Admin"
                },
                new IdentityRole
                {
                    Name = "User",
                    ConcurrencyStamp = "3",
                    NormalizedName = "User"
                });
        }
    }
}
