using SharedKernel;

namespace Application;

public class CurrentDateTimeProvider : ICurrentDateTimeProvider
{
    public DateTimeOffset Now => DateTimeOffset.Now;

    public DateTimeOffset UtcNow => DateTimeOffset.UtcNow;
}
