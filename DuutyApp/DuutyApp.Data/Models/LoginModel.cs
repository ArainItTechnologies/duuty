using System.ComponentModel.DataAnnotations;

namespace DuutyApp.Data.Models;

public class LoginModel
{
    public string Email { get; set; }
    [Required]
    public string Password { get; set; }
}