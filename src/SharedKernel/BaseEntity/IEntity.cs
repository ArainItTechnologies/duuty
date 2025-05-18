namespace SharedKernel.BaseEntity;
public interface IEntity
{
    DateTimeOffset? DateCreated { get; set; }
    DateTimeOffset? LastUpdated { get; set; }
}
