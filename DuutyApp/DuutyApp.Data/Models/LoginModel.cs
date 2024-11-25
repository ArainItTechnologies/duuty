using System.ComponentModel.DataAnnotations;

namespace DuutyApp.Data.Models;

public class LoginModel
{
    public required string Email { get; set; }
    [Required]
    public required string Password { get; set; }
}