using DuutyApp.Data.BaseEntities;
using System.ComponentModel.DataAnnotations;

namespace DuutyApp.Data.Entities;

public class Applicant : BaseAuditableEntity
{
    [MaxLength(100)]
    public required string FirstName { get; set; }
    [MaxLength(100)]
    public required string LastName { get; set; }
}
