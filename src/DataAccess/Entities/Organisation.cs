using DataAccess.Identity;

namespace DataAccess.Entities;

public class Organisation
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public Guid AddressId { get; set; }
    public virtual ICollection<Address> Addresses { get; set; }
    public virtual ICollection<ArainUser> Users { get; set; }
}

