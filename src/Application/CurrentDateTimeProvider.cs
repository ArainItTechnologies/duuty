using SharedKernel.Service;

namespace Application;

public class CurrentDateTimeProvider : ITimeProvider
{
    public DateTimeOffset Now => DateTimeOffset.Now;

    public DateTimeOffset UtcNow => DateTimeOffset.UtcNow;
}
