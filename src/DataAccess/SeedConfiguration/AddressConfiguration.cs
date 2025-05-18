using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DataAccess.SeedConfiguration;

public class AddressConfiguration : IEntityTypeConfiguration<Address>
{
    public void Configure(EntityTypeBuilder<Address> builder)
    {
        builder.HasData(
            new Address
            {
                Id = DuutySeedConstants.AddressId,
                AddressLine1 = "95 Manor Road",
                AddressLine2 = string.Empty,
                City = "Newent",
                State = "Gloucestershire",
                PostalCode = "GL18 1UJ",
                Country = "United Kingdom"
            }
        );
    }
}