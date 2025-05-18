using FastEndpoints;
using FluentValidation;

namespace Web.Server.Features.Public.Register;

public class RegisterValidator : Validator<RegisterModel>
{
    public RegisterValidator()
    {
        RuleFor(x => x.Email).NotEmpty()
                             .When(x => string.IsNullOrEmpty(x.PhoneNumber))
                             .WithMessage("Either Email or PhoneNumber is required.");
        RuleFor(x => x.PhoneNumber).NotEmpty()
                                   .When(x => string.IsNullOrEmpty(x.Email))
                                   .WithMessage("Either Email or PhoneNumber is required.");
    }
}
