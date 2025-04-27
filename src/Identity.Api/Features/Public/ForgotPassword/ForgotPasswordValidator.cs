using FastEndpoints;
using FluentValidation;
using System.Net;

namespace Web.Server.Features.Public.ForgotPassword;

public class ForgotPasswordValidator : Validator<ForgotPasswordRequest>
{
    public ForgotPasswordValidator()
    {
        RuleFor(x => x.Email)
            .NotEmpty()
            .WithMessage("Email cannot be empty")
            .WithErrorCode(HttpStatusCode.BadRequest.ToString());
    }
}
