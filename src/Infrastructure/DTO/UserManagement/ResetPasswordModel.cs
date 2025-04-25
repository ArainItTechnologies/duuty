namespace Infrastructure.DTO.UserManagement;

public class ResetPasswordModel
{
    public string? Email { get; set; }
    public string? PhomeNumber { get; set; }
    public required string Token { get; set; }
    public required string NewPassword { get; set; }
}
