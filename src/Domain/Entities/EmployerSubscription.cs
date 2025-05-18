using Domain.Enums;
using System.ComponentModel.DataAnnotations;

namespace Domain.Entities;

public class EmployerSubscription : Entity
{
    [Key]
    public long Id { get; set; }

    public long UserId { get; set; }

    public SubscriptionPlan Plan { get; set; }

    public int JobPostLimit { get; set; }

    public DateTimeOffset StartDate { get; set; }
    public DateTimeOffset ExpiryDate { get; set; }

    public required SubscriptionStatus Status { get; set; }
}

