namespace SharedKernel.Service;

public interface ITimeProvider
{
    DateTimeOffset Now { get; }
    DateTimeOffset UtcNow { get; }
}
