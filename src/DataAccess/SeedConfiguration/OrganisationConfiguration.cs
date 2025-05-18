using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DataAccess.SeedConfiguration;

public class OrganisationConfiguration : IEntityTypeConfiguration<Organisation>
{
    public void Configure(EntityTypeBuilder<Organisation> builder)
    {
        var organisationId = DuutySeedConstants.OrganisationId;
        var addressId = DuutySeedConstants.AddressId;

        builder.HasData(
            new Organisation
            {
                Id = organisationId,
                OranisationName = "Arain IT Technologies",
                AddressId = addressId
            }
        );
    }
}

