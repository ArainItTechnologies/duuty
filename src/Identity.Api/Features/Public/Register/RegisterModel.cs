using System.ComponentModel.DataAnnotations;

namespace Web.Server.Features.Public.Register;

public class RegisterModel
{
    [Required]
    [MinLength(6)]
    public required string Password { get; set; }

    [Required]
    [Compare(nameof(Password), ErrorMessage = "Password and confirmation password do not match.")]
    public required string ConfirmPassword { get; set; }
    public string? Email { get; set; }
    public string? PhoneNumber { get; set; }
}
