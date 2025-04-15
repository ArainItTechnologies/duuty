using Microsoft.AspNetCore.Identity;

namespace DataAccess.Identity;

public class DuutyUser : IdentityUser<string>
{
    public DuutyUser()
    {
        Id = Guid.NewGuid().ToString();
    }
    public string? FullName { get; set; }
}