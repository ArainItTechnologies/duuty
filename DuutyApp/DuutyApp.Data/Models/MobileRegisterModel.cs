   public class MobileRegisterModel
   {
       [Required]
       public required string MobileNumber { get; set; }
       
       [Required]
       public required string Otp { get; set; }
       
       [Required]
       [MinLength(6)]
       public required string Password { get; set; }
       
       [Compare("Password")]
       public required string ConfirmPassword { get; set; }
   }
   