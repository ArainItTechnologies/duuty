namespace Infrastructure.DTO.UserManagement;

public class AddRoleModel
{
    public string? Email { get; set; }
    public string? PhomeNumber { get; set; }
    public required string Role { get; set; }
}
