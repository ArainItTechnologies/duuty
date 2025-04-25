using DataAccess.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity.UI.Services;
using System.Net;
using Infrastructure.DTO;
using Infrastructure.DTO.UserManagement;
using Web.Server.Features.Public.Login;
using static Web.Server.Features.Public.Login.LoginEndpoint;

namespace Web.Server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class IdentityController : ControllerBase
{
    private readonly UserManager<DuutyUser> _userManager;
    private readonly SignInManager<DuutyUser> _signInManager;
    private readonly IEmailSender _emailSender;

    public IdentityController(
        UserManager<DuutyUser> userManager,
        SignInManager<DuutyUser> signInManager,
        IEmailSender emailSender)
    {
        _userManager = userManager;
        _signInManager = signInManager;
        _emailSender = emailSender;
    }

    // Register new user
    [HttpPost("register")]
    [AllowAnonymous]
    public async Task<IActionResult> Register([FromBody] RegisterModel model)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        if (string.IsNullOrWhiteSpace(model.Email) && string.IsNullOrWhiteSpace(model.PhoneNumber))
        {
            return BadRequest("Either email or phone number is required.");
        }

        var userName = !string.IsNullOrWhiteSpace(model.Email)
            ? model.Email
            : model.PhoneNumber;

        var user = new DuutyUser
        {
            UserName = userName,
            Email = model.Email,
            PhoneNumber = model.PhoneNumber
        };
        string encodedToken = string.Empty;
        var result = await _userManager.CreateAsync(user, model.Password);
        if (result.Succeeded)
        {
            if (!string.IsNullOrWhiteSpace(model.Email))
            {
                var token = await _userManager.GenerateEmailConfirmationTokenAsync(user);

                encodedToken = WebUtility.UrlEncode(token);

                var confirmationLink = Url.Action(
                    action: "ConfirmEmail",
                    controller: "Identity",
                    values: new { userId = user.Id, token = encodedToken },
                    protocol: Request.Scheme);

                if (!string.IsNullOrEmpty(confirmationLink))
                {
                    await _emailSender.SendEmailAsync(
                        model.Email,
                        "Confirm your email",
                        confirmationLink);
                }
            }

            await _userManager.AddToRoleAsync(user, "User");
            return Ok(new RegistrationResponse
            {
                IsSuccess = true,
                Message = "User registered successfully",
                Token = encodedToken,
                UserId = user.Id
            });
        }
        return BadRequest(new RegistrationResponse
        {
                IsSuccess = true,
                Error = "User registered successfully",
                Token = encodedToken,
                UserId = user.Id
            });
    }

    // Login
    [HttpPost("login")]
    [AllowAnonymous]
    public async Task<IActionResult> Login([FromBody] LoginRequest model)
    {
        var user = await _userManager.FindByEmailAsync(model.Email);
        if (user != null)
        {
            var result = await _signInManager.PasswordSignInAsync(user, model.Password, false, false);
            if (result.Succeeded)
            {
                var token = await _userManager.GenerateEmailConfirmationTokenAsync(user);

                return Ok(new AuthResponse { IsAuthSuccessful = true, Token = token });
            }
        }
        return Unauthorized("Invalid login attempt.");
    }

    // Logout
    [HttpPost("logout")]
    [Authorize]
    public async Task<IActionResult> Logout()
    {
        await _signInManager.SignOutAsync();
        return Ok("Logged out successfully.");
    }

    // Reset password
    [Authorize]
    [HttpPost("reset-password")]
    public async Task<IActionResult> ResetPassword([FromBody] ResetPasswordModel model)
    {
        var user = await _userManager.FindByEmailAsync(model.Email);
        if (user != null)
        {
            var result = await _userManager.ResetPasswordAsync(user, model.Token, model.NewPassword);
            if (result.Succeeded)
            {
                return Ok("Password reset successful.");
            }
        }
        return BadRequest("Error resetting password.");
    }

    // Get all users (for admin purposes)
    [HttpGet("users")]
    [Authorize(Roles = "Admin")]
    public IActionResult GetAllUsers()
    {
        var users = _userManager.Users;
        return Ok(users);
    }

    // Get current user's information
    [HttpGet("me")]
    [Authorize]
    public async Task<IActionResult> GetCurrentUser()
    {
        var user = await _userManager.GetUserAsync(User);
        if (user == null)
            return Unauthorized();

        return Ok(new
        {
            user.UserName,
            user.Email
        });
    }

    // Add roles to user
    [HttpPost("add-role")]
    [Authorize(Roles = "Admin,Manager")]
    public async Task<IActionResult> AddRoleToUser([FromBody] AddRoleModel model)
    {
        var user = await _userManager.FindByEmailAsync(model.Email);
        if (user == null) return NotFound();

        var result = await _userManager.AddToRoleAsync(user, model.Role);
        if (result.Succeeded)
        {
            return Ok($"User {user.UserName} added to role {model.Role}");
        }
        return BadRequest(result.Errors);
    }

    [HttpPost("confirm-email")]
    public async Task<IActionResult> ConfirmEmail(string userId, string token)
    {
        if (string.IsNullOrEmpty(userId) || string.IsNullOrEmpty(token))
            return BadRequest("UserId and token are required");

        var user = await _userManager.FindByIdAsync(userId);
        if (user == null)
            return NotFound("User not found");

        var decodedToken = WebUtility.UrlDecode(token);

        var result = await _userManager.ConfirmEmailAsync(user, decodedToken);
        if (result.Succeeded)
        {
            return Ok("Email confirmed successfully!");
        }

        return BadRequest("Email confirmation failed.");
    }

    [HttpPost("login-2fa")]
    [AllowAnonymous]
    public async Task<IActionResult> LoginWith2FA([FromBody] LoginWith2FAModel model)
    {
        var user = await _userManager.FindByEmailAsync(model.Email);
        if (user == null)
        {
            return Unauthorized("Invalid login attempt.");
        }

        // Check if the user has 2FA enabled
        if (await _userManager.GetTwoFactorEnabledAsync(user))
        {
            // Generate the 2FA token
            var token = await _userManager.GenerateTwoFactorTokenAsync(user, model.Provider); // Provider could be "Email" or "Phone"

            // Send token to the user (e.g., via email or SMS)
            //await Send2FAToken(user, token);

            return Ok("2FA token sent.");
        }

        return Unauthorized("2FA is not enabled for this user.");
    }

    [HttpPost("verify-2fa")]
    [AllowAnonymous]
    public async Task<IActionResult> Verify2FA([FromBody] Verify2FAModel model)
    {
        var user = await _userManager.FindByEmailAsync(model.Email);
        if (user == null)
        {
            return Unauthorized("Invalid login attempt.");
        }

        // Verify the 2FA token
        var result = await _userManager.VerifyTwoFactorTokenAsync(user, model.Provider, model.Token);
        if (result)
        {
            // Sign the user in if 2FA is successful
            await _signInManager.SignInAsync(user, isPersistent: false);
            return Ok("2FA verified and user logged in.");
        }

        return Unauthorized("Invalid 2FA token.");
    }

    [HttpPost("enable-2fa")]
    [Authorize]
    public async Task<IActionResult> Enable2FA()
    {
        var user = await _userManager.GetUserAsync(User);
        if (user == null)
        {
            return Unauthorized("User not found.");
        }

        // Enable 2FA for the user
        var result = await _userManager.SetTwoFactorEnabledAsync(user, true);
        if (result.Succeeded)
        {
            return Ok("2FA enabled.");
        }

        return BadRequest("Error enabling 2FA.");
    }
}