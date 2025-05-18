namespace Domain.Entities;

public class Address : Entity
{
    public long Id { get; set; }
    public required string AddressLine1 { get; set; }
    public string AddressLine2 { get; set; } = string.Empty;
    public required string City { get; set; }
    public required string State { get; set; }
    public required string Country { get; set; } = "India";
    public string PostalCode { get; set; } = string.Empty;
}