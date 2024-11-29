using DuutyApp.Data;
using DuutyApp.Data.Dtos;
using DuutyApp.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace DuutyApp.Service
{
    public class UserService : IUserService
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly DuutyAppDbContext _context;

        public UserService(UserManager<IdentityUser> userManager, DuutyAppDbContext context)
        {
            _userManager = userManager;
            _context = context;
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
                .ToListAsync();

            return usersWithRoles;
        }
    }
}
