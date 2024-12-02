using DuutyApp.Data.Dtos;

namespace DuutyApp.Interfaces
{
    public interface IUserService
    {
        Task<IEnumerable<ApplicationUser>> GetAll(CancellationToken cancellationToken);
        Task<string> AddRoleToUserAsync(string email, string role);
    }
}
