namespace Infrastructure.DTO.UserManagement;

public class Verify2FAModel
{
    public string Email { get; set; }
    public string Provider { get; set; }
    public string Token { get; set; }
}
