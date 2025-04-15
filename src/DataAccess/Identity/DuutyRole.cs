using Microsoft.AspNetCore.Identity;

namespace DataAccess.Identity;

public class DuutyRole: IdentityRole<string>
{
    public string? Description { get; set; }
}
