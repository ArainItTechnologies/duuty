using DataAccess.Entities;
using Microsoft.AspNetCore.Identity;

namespace DataAccess.Identity;

public class DuutyUser : IdentityUser<string>
{
    public DuutyUser()
    {
        Id = Guid.NewGuid().ToString();
    }
    public string? FullName { get; set; }
    public DateTimeOffset? Birthday { get; set; } 

    public Guid? OrganisationId { get; set; }

    public virtual Organisation? Organisation { get; set; }
}