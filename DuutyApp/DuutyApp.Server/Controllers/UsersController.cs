using DuutyApp.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace DuutyApp.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
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
    }
}
