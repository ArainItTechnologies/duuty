namespace Infrastructure.DTO;

public class UserForAuthentication
{
    public required string Email { get; set; }
    public required string Password { get; set; }
}
