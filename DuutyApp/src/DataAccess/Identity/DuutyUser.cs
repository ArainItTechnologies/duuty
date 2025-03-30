using Microsoft.AspNetCore.Identity;

namespace DataAccess.Identity;

public class DuutyUser : IdentityUser
{
    public string? FullName { get; set; }
}