using System.ComponentModel.DataAnnotations;

namespace DuutyApp.Data.Models;

public class ResetPasswordModel
{
    public required string Email { get; set; }
    public required string Token { get; set; }
    [Required]
    [MinLength(6)]
    public required string NewPassword { get; set; }
}