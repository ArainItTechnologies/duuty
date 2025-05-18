using DataAccess.Identity;
using FastEndpoints;
using Infrastructure.JwtFeatures;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;

namespace Web.Server.Features.Public.Login;

[HttpPost("/api/login")]
[AllowAnonymous]
public class LoginEndpoint(UserManager<ArainUser> userManager, JwtHandler jwtHandler) : Endpoint<LoginRequest, LoginResponse>
{
    public override async Task HandleAsync(LoginRequest request, CancellationToken ct)
    {
        var user = await userManager.FindByEmailAsync(request.Email!);
        if (user is null || !await userManager.CheckPasswordAsync(user, request.Password))
        {
            await SendAsync(new LoginResponse
            {
                IsAuthSuccessful = false,
                ErrorMessage = "Invalid Email or password."
            }, 401, ct);
            return;
        }

        var roles = await userManager.GetRolesAsync(user);

        var token = jwtHandler.CreateToken(user, roles);

        await SendAsync(new LoginResponse
        {
            IsAuthSuccessful = true,
            Token = token,
            ErrorMessage = roles.Count == 0 ? "User has no roles." : null
        }, 200, ct);
        return;
    }
}

public class LoginRequest
{
    public string? Email { get; set; }
    public string? PhoneNumber { get; set; }
    public required string Password { get; set; }
}

public class LoginResponse
{
    public bool IsAuthSuccessful { get; set; }
    public string? ErrorMessage { get; set; }
    public string? Token { get; set; }
}
