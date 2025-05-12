using Application;
using DataAccess.Identity;
using FastEndpoints;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.AspNetCore.WebUtilities;
using System.Net;
using System.Text;

namespace Web.Server.Features.Public.ConfirmEmail
{
    [HttpPost("/api/confirm")]
    [AllowAnonymous]
    public class ConfirmEndpoint(UserManager<ArainUser> userManager, IEmailSender emailSender) : EndpointWithoutRequest<ConfirmResponse>
    {
        public override async Task HandleAsync(CancellationToken ct)
        {
            var userId = Query<Guid>("userId");
            var token = Query<string>("token");
            if (userId == Guid.Empty || string.IsNullOrWhiteSpace(token))
            {
                await SendAsync(new ConfirmResponse(false, "Invalid request"), (int)HttpStatusCode.BadRequest, ct);
                return;
            }
            var user = await userManager.FindByIdAsync(userId.ToString());
            if (user is null)
            {
                await SendAsync(new ConfirmResponse(false, "User not found"), (int)HttpStatusCode.NotFound, ct);
                return;
            }

            var decodedToken = Encoding.UTF8.GetString(WebEncoders.Base64UrlDecode(token));

            var result = await userManager.ConfirmEmailAsync(user, decodedToken);
            if (result.Succeeded)
            {
                await emailSender.SendEmailAsync(
                    user.Email!,
                    EmailType.Verified,
                    string.Empty);
                await SendAsync(new ConfirmResponse(true, "Email confirmed successfully!"), (int)HttpStatusCode.OK, ct);
                return;
            }

            await SendAsync(new ConfirmResponse(false, "Email confirmation failed."), (int)HttpStatusCode.BadRequest, ct);
        }
    }

    public record ConfirmResponse(bool IsSuccess, string Message);
}
