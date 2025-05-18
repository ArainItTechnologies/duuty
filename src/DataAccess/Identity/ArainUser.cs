using Domain.Entities;
using Microsoft.AspNetCore.Identity;

namespace DataAccess.Identity;

public class ArainUser : IdentityUser<string>
{
    public ArainUser()
    {
        Id = Guid.NewGuid().ToString();
    }
    public string? FullName { get; set; }
    public DateTimeOffset? Birthday { get; set; }

    public virtual Organisation? Organisation { get; set; }
}