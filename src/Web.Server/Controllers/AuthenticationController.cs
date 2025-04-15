using DataAccess.Identity;
using Infrastructure.DTO;
using Infrastructure.JwtFeatures;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Web.Server.Controllers;

[ApiController]
[Route("[controller]")]
public class AuthenticationController : ControllerBase
{
    private readonly UserManager<DuutyUser> _userManager;
    private readonly JwtHandler _jwtHandler;

    public AuthenticationController(UserManager<DuutyUser> userManager, JwtHandler jwtHandler)
    {
        _userManager = userManager;
        _jwtHandler = jwtHandler;
    }

    [HttpPost]
    public async Task<IActionResult> Authenticate([FromBody] UserForAuthentication userForAuthentication)
    {
        var user = await _userManager.FindByEmailAsync(userForAuthentication.Email);
        if (user is null || !await _userManager.CheckPasswordAsync(user, userForAuthentication.Password))
        {
            return Unauthorized(new AuthResponse{ ErrorMessage = "Invalid email or password" });
        }

        var roles = await _userManager.GetRolesAsync(user);

        var token = _jwtHandler.CreateToken(user, roles);
        return Ok(new AuthResponse{ IsAuthSuccessful = true, Token = token });
    }
}
