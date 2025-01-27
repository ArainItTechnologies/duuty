using System.ComponentModel.DataAnnotations;
using DuutyApp.Data.BaseEntities;
using DuutyApp.Data.Enums;

namespace DuutyApp.Data.Entities;

public class JobType : BaseAuditableEntity
{
    [Required]
    [MaxLength(50)]
    public required JobClassification JobClassification { get; set; }
    public ICollection<JobPost> JobPosts { get; set; }
}