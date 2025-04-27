using DataAccess.Entities;
using DataAccess.SeedConfiguration;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DataAccess.SeedConfiguration;

public class OrganisationConfiguration : IEntityTypeConfiguration<Organisation>
{
    public void Configure(EntityTypeBuilder<Organisation> builder)
    {
        var organisationId = Guid.Parse(DuutySeedConstants.OrganisationId);
        var addressId = Guid.Parse(DuutySeedConstants.AddressId);

        builder.HasData(
            new Organisation
            {
                Id = organisationId,
                Name = "Arain IT Technologies",
                AddressId = addressId
            }
        );
    }
}

