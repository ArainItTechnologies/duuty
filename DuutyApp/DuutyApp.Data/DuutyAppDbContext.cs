using DuutyApp.Data.Entities;
using DuutyApp.Data.Enums;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Emit;

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
            // Configure the decimal precision and scale for Salary
            modelBuilder.Entity<JobPost>()
                .Property(j => j.Salary)
                .HasColumnType("decimal(18, 2)");

            // Define indexes
            modelBuilder.Entity<JobPost>()
                .HasIndex(j => new { j.Location, j.JobClassification });

            modelBuilder.Entity<JobType>()
                .HasIndex(t => t.JobClassification)
                .IsUnique();
            SeedRoles(modelBuilder);
        }

        public DbSet<Applicant> Applicants { get; set; }
        public DbSet<JobPost> JobPosts { get; set; }
        public DbSet<JobType> JobTypes { get; set; }

        private void SeedRoles(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<IdentityRole>()
                .HasData(
                [.. Enum.GetValues(typeof(RoleNames))
                .Cast<RoleNames>()
                .Select(role => new IdentityRole
                {
                    Name = role.ToString(),
                    NormalizedName = role.ToString().ToUpper(),
                    ConcurrencyStamp = ((int)role).ToString()
                })]);

            modelBuilder.Entity<JobType>()
                .HasData(
                [.. Enum.GetValues(typeof(JobClassification))
                    .Cast<JobClassification>()
                    .Select((classification, index) => new JobType
                    {
                        Id = Guid.NewGuid(),
                        JobClassification = classification
                    })]);
        }
    }
}
