namespace SharedKernel.BaseEntity;

public class Entity : IEntity
{
    public DateTimeOffset? DateCreated { get; set; }
    public DateTimeOffset? LastUpdated { get; set; }

    public Entity()
    {
        DateCreated = DateTimeOffset.Now;
    }
}
