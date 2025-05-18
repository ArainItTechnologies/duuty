using Application;
using DataAccess.Identity;
using FastEndpoints;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.AspNetCore.WebUtilities;
using System.Text;

namespace Web.Server.Features.Public.Register;

[HttpPost("/api/register")]
[AllowAnonymous]
public class RegisterEndpoint : Endpoint<RegisterModel, RegistrationResponse>
{
    private readonly UserManager<ArainUser> _userManager;
    private readonly IEmailSender _emailSender;
    private readonly IConfiguration _configuration;

    public RegisterEndpoint(
        UserManager<ArainUser> userManager,
        IEmailSender emailSender,
        IConfiguration configuration)
    {
        _userManager = userManager;
        _emailSender = emailSender;
        _configuration = configuration;
    }
    public override async Task HandleAsync(RegisterModel model, CancellationToken ct)
    {
        var userName = !string.IsNullOrWhiteSpace(model.Email)
            ? model.Email
            : model.PhoneNumber;

        var user = new ArainUser
        {
            UserName = userName,
            Email = model.Email,
            PhoneNumber = model.PhoneNumber
        };

        var result = await _userManager.CreateAsync(user, model.Password);
        if (!result.Succeeded)
        {
            AddError("registration", string.Join(", ", result.Errors.Select(e => e.Description)));
            await SendErrorsAsync(cancellation: ct);
            return;
        }

        if (!string.IsNullOrWhiteSpace(model.Email))
        {
            var token = await _userManager.GenerateEmailConfirmationTokenAsync(user);

            var encodedToken = WebEncoders.Base64UrlEncode(Encoding.UTF8.GetBytes(token));

            var confirmationLink = $"{_configuration["ClientAppBaseUrl"]}/confirm?userId={user.Id}&token={encodedToken}";

            await _emailSender.SendEmailAsync(
                model.Email,
                EmailType.Confirm,
                confirmationLink);
        }

        await _userManager.AddToRoleAsync(user, "User");

        await SendAsync(new RegistrationResponse
        {
            IsSuccess = true,
            Message = "User registered successfully",
        }, cancellation: ct);
    }
}
