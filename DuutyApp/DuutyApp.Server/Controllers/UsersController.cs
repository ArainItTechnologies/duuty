using DuutyApp.Data.Enums;
using DuutyApp.Data.Models;
using DuutyApp.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DuutyApp.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize(Roles = nameof(RoleNames.SuperAdmin))]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _userService;

        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        // GET: api/Users/List
        [HttpGet("List")]
        public async Task<IActionResult> GetAllAsync()
        {
            var users = await _userService.GetAll(CancellationToken.None);
            return Ok(new { Users = users });
        }
        
        // POST: api/Users/AddUserRole
        [HttpPost("AddUserRole")]
        public async Task<IActionResult> AddRoleToUserAsync(AddRoleToUser addRoleToUser)
        {
            var message = await _userService.AddRoleToUserAsync(addRoleToUser.Email, addRoleToUser.Role);

            return Ok(new {Message = message});
        }
    }
}
