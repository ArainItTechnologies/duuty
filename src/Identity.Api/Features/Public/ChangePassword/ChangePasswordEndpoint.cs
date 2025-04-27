using DataAccess.Identity;
using FastEndpoints;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;

namespace Web.Server.Features.Public.ChangePassword;

[HttpPost("/api/change-password")]
[Authorize]
public class ChangePasswordEndpoint : Endpoint<ChangePasswordRequest, ChangePasswordResponse>
{
    private readonly UserManager<ArainUser> _userManager;
    public ChangePasswordEndpoint(UserManager<ArainUser> userManager)
    {
        _userManager = userManager;
    }
    public override async Task HandleAsync(ChangePasswordRequest request, CancellationToken ct)
    {
        var user = await _userManager.FindByEmailAsync(HttpContext!.User!.Identity!.Name!);
        if (user is null)
        {
            await SendNotFoundAsync(ct);
            return;
        }
        var result = await _userManager.ChangePasswordAsync(user, request.CurrentPassword, request.NewPassword);
        if (result.Succeeded)
        {
            await SendOkAsync(new ChangePasswordResponse(true, "Password changed successfully!"), ct);
            return;
        }
        AddError("change_password", string.Join(", ", result.Errors.Select(e => e.Description)));
        await SendErrorsAsync(cancellation: ct);
    }
}

public record ChangePasswordResponse(bool IsSuccess, string Message);

public class ChangePasswordRequest
{
    public required string CurrentPassword { get; set; }
    public required string NewPassword { get; set; }
}