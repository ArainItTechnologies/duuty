namespace SharedKernel.Interfaces
{
    public interface ITimeProvider
    {
        DateTimeOffset Now { get; }
        DateTimeOffset UtcNow { get; }
    }
}
