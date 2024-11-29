using DuutyApp.Data.Entities;
using DuutyApp.Data.Enums;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

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
                .HasData(
                Enum.GetValues(typeof(RoleNames))
                .Cast<RoleNames>()
                .Select(role => new IdentityRole
                {
                    Name = role.ToString(),
                    NormalizedName = role.ToString().ToUpper(),
                    ConcurrencyStamp = ((int)role).ToString()
                })
                .ToArray());
        }
    }
}
