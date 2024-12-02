using DuutyApp.Data;
using DuutyApp.Data.Dtos;
using DuutyApp.Data.Enums;
using DuutyApp.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace DuutyApp.Service
{
    public class UserService : IUserService
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly DuutyAppDbContext _context;

        public UserService(UserManager<IdentityUser> userManager, RoleManager<IdentityRole> roleManager, DuutyAppDbContext context)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _context = context;
        }

        public async Task<string> AddRoleToUserAsync(string email, string role)
        {
            if (!Enum.IsDefined(typeof(RoleNames), role))
            {
                return $"Role '{role}' is not a valid role.";
            }
            var user = await _userManager.FindByEmailAsync(email);
            if (user == null)
            {
                return $"User with email '{email}' not found.";
            }

            if (!await _roleManager.RoleExistsAsync(role))
            {
                return $"Role '{role}' does not exist.";
            }

            var result = await _userManager.AddToRoleAsync(user, role);
            if (!result.Succeeded)
            {
                var errors = string.Join(", ", result.Errors.Select(e => e.Description));
                return $"Failed to add role '{role}' to user '{user.UserName}': {errors}";
            }

            return $"Role '{role}' added to user '{user.UserName}' successfully.";
        }

        public async Task<IEnumerable<ApplicationUser>> GetAll(CancellationToken cancellationToken)
        {
            // Optimized query to fetch users and their roles in a single query
            var usersWithRoles = await _context.Users
                .Select(user => new ApplicationUser
                {
                    UserId = user.Id,
                    Email = user.Email!,
                    UserName = user.UserName!,
                    Roles = (from userRole in _context.UserRoles
                             join role in _context.Roles
                             on userRole.RoleId equals role.Id
                             where userRole.UserId == user.Id
                             select role.Name).ToList()
                })
                .ToListAsync(cancellationToken);

            return usersWithRoles.OrderBy(x => x.UserName);
        }
    }
}
