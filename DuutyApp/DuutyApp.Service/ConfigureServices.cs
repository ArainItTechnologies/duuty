using DuutyApp.Interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace DuutyApp.Service
{
    public static class ConfigureServices
    {
        public static IServiceCollection AddServicesIoC(this IServiceCollection service) => service.AddScoped<IUserService, UserService>();
    }
}
