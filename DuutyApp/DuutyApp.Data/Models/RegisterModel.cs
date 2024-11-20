using System.ComponentModel.DataAnnotations;

namespace DuutyApp.Data.Models;

public class RegisterModel
{
    public string Email { get; set; }
    [Required]
    [MinLength(6)]
    public string Password { get; set; }
    [Compare("Password")]
    public string ConfirmPassword { get; set; }
}