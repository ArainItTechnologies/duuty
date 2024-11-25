using System.ComponentModel.DataAnnotations;

namespace DuutyApp.Data.Models;

public class RegisterModel
{
    public required string Email { get; set; }
    [Required]
    [MinLength(6)]
    public required string Password { get; set; }
    [Compare("Password")]
    public required string ConfirmPassword { get; set; }
}