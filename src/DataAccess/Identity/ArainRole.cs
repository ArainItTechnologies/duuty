using Microsoft.AspNetCore.Identity;

namespace DataAccess.Identity;

public class ArainRole : IdentityRole<string>
{
    public string? Description { get; set; }
}
