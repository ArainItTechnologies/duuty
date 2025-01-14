public class VerifyOtpModel
{
    [Required]
    public required string MobileNumber { get; set; }

    [Required]
    public required string Otp { get; set; }
}
