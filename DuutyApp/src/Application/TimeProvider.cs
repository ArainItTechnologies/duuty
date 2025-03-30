using SharedKernel.Interfaces;

namespace Application
{
    public class TimeProvider : ITimeProvider
    {
        public DateTimeOffset Now => DateTimeOffset.Now;

        public DateTimeOffset UtcNow => DateTimeOffset.UtcNow;
    }
}
