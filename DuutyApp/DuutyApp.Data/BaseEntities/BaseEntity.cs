using System.ComponentModel.DataAnnotations;

namespace DuutyApp.Data.BaseEntities;

public abstract class BaseEntity
{
    [Key]
    public Guid Id { get; set; }
}
