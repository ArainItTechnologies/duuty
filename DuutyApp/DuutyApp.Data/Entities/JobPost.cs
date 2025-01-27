using System.ComponentModel.DataAnnotations;
using DuutyApp.Data.BaseEntities;
using DuutyApp.Data.Enums;

namespace DuutyApp.Data.Entities;

public class JobPost : BaseAuditableEntity
{
    [Required]
    [MaxLength(100)]
    public required string Title { get; set; }
    
    [MaxLength(2000)]
    public required string Description { get; set; }
    
    [Required]
    [MaxLength(50)]
    public string Location { get; set; }
    
    [Required]
    public DateTime PostedDate { get; set; }
    
    [Required]
    public DateTime ExpiryDate { get; set; }
    
    public decimal? Salary { get; set; }
    
    [Required]
    public bool IsActive { get; set; }
    
    [Required]
    public JobClassification JobClassification { get; set; } 
}
