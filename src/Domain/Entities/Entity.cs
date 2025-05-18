namespace Domain.Entities;

public class Entity
{
    public DateTimeOffset DateCreated { get; set; }
    public DateTimeOffset DateUpdated { get; set; }

    public Entity()
    {
        DateCreated = DateTimeOffset.UtcNow;
    }
}
