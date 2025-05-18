using System.ComponentModel.DataAnnotations;

namespace Domain.Entities;

public class EmployeeJobRole : Entity
{
    [Key]
    public long Id { get; set; }
    public Guid UserId { get; set; }
    public required string Role { get; set; }
    public string? SubRoles { get; set; }
}
