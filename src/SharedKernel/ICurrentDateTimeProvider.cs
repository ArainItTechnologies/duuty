namespace SharedKernel;

public interface ICurrentDateTimeProvider
{
    DateTimeOffset Now { get; }
    DateTimeOffset UtcNow { get; }
}
