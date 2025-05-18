namespace Domain.Entities;

public class Organisation : Entity
{
    public long Id { get; set; }
    public required string OranisationName { get; set; }

    public long? AddressId { get; set; }
    public Address Address { get; set; }

    public virtual ICollection<Employer> Employers { get; set; }
}
