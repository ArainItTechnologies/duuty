using DataAccess.Entities;
using DataAccess.SeedConfiguration;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

public class AddressConfiguration : IEntityTypeConfiguration<Address>
{
    public void Configure(EntityTypeBuilder<Address> builder)
    {
        builder.HasData(
            new Address
            {
                Id = Guid.Parse(DuutySeedConstants.AddressId),
                AddressLine1 = "95 Manor Road",
                AddressLine2 = null,
                City = "Newent",
                PostalCode = "GL18 1UJ",
                Country = "United Kingdom",
                OrganisationId = Guid.Parse(DuutySeedConstants.OrganisationId)
            }
        );
    }
}
