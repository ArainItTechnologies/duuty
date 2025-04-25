namespace DataAccess.Entities;

public class Address
{
    public Guid Id { get; set; }
    public string AddressLine1 { get; set; }
    public string? AddressLine2 { get; set; }
    public string City { get; set; }
    public string StateOrProvince { get; set; }
    public string PostalCode { get; set; }
    public string Country { get; set; }

    public bool IsCurrentAddress { get; set; }
    public Guid OrganisationId { get; set; }
    public virtual Organisation Organisation { get; set; }
}

