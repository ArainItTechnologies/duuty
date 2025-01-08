using DuutyApp.Data.Enums;
using DuutyApp.Data.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace DuutyApp.Server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly UserManager<IdentityUser> _userManager;
    private readonly SignInManager<IdentityUser> _signInManager;
    private readonly RoleManager<IdentityRole> _roleManager;
    private readonly JwtSettings _jwtSettings;

    public AuthController(
        UserManager<IdentityUser> userManager,
        SignInManager<IdentityUser> signInManager,
        RoleManager<IdentityRole> roleManager,
        IOptions<JwtSettings> jwtOptions)
    {
        _userManager = userManager;
        _signInManager = signInManager;
        _roleManager = roleManager;
        _jwtSettings = jwtOptions.Value;
    }

    // POST: api/Auth/Register
    [HttpPost("Register")]
    public async Task<IActionResult> Register([FromBody] RegisterModel model)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var user = new IdentityUser { UserName = model.Email, Email = model.Email };
        var result = await _userManager.CreateAsync(user, model.Password);

        if (result.Succeeded)
        {
            // Ensure the role exists before adding
            if (!await _roleManager.RoleExistsAsync(nameof(RoleNames.Guest)))
            {
                await _roleManager.CreateAsync(new IdentityRole(nameof(RoleNames.Guest)));
            }
            await _userManager.AddToRoleAsync(user, nameof(RoleNames.Guest));
            return Ok(new { Message = "User registered successfully." });
        }

        return BadRequest(result.Errors);
    }

    private string GenerateJwtToken(Claim[] claims)
    {
        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwtSettings.SecretKey));
        var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var token = new JwtSecurityToken(
            issuer: _jwtSettings.Issuer,
            audience: _jwtSettings.Audience,
            claims: claims,
            expires: DateTime.Now.AddMinutes(Convert.ToDouble(_jwtSettings.ExpiryInMinutes)),
            signingCredentials: credentials
        );

        return new JwtSecurityTokenHandler().WriteToken(token);
    }

    // POST: api/Auth/Login
    [HttpPost("Login")]
    public async Task<IActionResult> Login([FromBody] LoginModel model)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var user = await _userManager.FindByEmailAsync(model.Email);
        if (user == null)
            return Unauthorized(new { Message = "Email is not registered." });

        var result = await _signInManager.PasswordSignInAsync(user.UserName!, model.Password, false, false);

        if (result.Succeeded)
        {
            var roles = await _userManager.GetRolesAsync(user);

            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.UserName!),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.Name, user.UserName!),
                new Claim(ClaimTypes.Role, string.Join(",", roles)),
                new Claim(ClaimTypes.Email, user.Email!),
            };

            var token = GenerateJwtToken(claims);
            return Ok(new { Message = "Login successful.", Token = token });
        }

        return Unauthorized(new { Message = "Invalid email or password." });
    }

    // POST: api/Auth/ForgotPassword
    [HttpPost("ForgotPassword")]
    public async Task<IActionResult> ForgotPassword([FromBody] ForgotPasswordModel model)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var user = await _userManager.FindByEmailAsync(model.Email);
        if (user == null)
            return BadRequest(new { Message = "User not found." });

        var token = await _userManager.GeneratePasswordResetTokenAsync(user);
        var resetLink = Url.Action(nameof(ResetPassword), "Auth", new { token, email = user.Email }, Request.Scheme);

        // Here you can send the resetLink via email.
        return Ok(new { Message = "Password reset link sent.", ResetLink = resetLink });
    }

    // POST: api/Auth/ResetPassword
    [HttpPost("ResetPassword")]
    public async Task<IActionResult> ResetPassword([FromBody] ResetPasswordModel model)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var user = await _userManager.FindByEmailAsync(model.Email);
        if (user == null)
            return BadRequest(new { Message = "User not found." });

        var result = await _userManager.ResetPasswordAsync(user, model.Token, model.NewPassword);

        if (result.Succeeded)
        {
            return Ok(new { Message = "Password reset successfully." });
        }

        return BadRequest(result.Errors);
    }

    // POST: api/Auth/Logout
    [HttpPost("Logout")]
    [Authorize] // Ensure the user is authenticated
    public async Task<IActionResult> Logout()
    {
        await _signInManager.SignOutAsync();
        return Ok(new { Message = "Logout successful." });
    }
}
