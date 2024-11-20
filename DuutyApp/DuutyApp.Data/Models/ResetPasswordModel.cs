using System.ComponentModel.DataAnnotations;

namespace DuutyApp.Data.Models;

public class ResetPasswordModel
{
    public string Email { get; set; }
    public string Token { get; set; }
    [Required]
    [MinLength(6)]
    public string NewPassword { get; set; }
}