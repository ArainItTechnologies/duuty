using System.ComponentModel.DataAnnotations;

public class MobileRegisterModel
   {
       [Required]
       public required string Mobile { get; set; }
       
       public required string Name { get; set; }
       
       [Required]
       [MinLength(6)]
       public required string Password { get; set; }
       
       [Compare("Password")]
       public required string ConfirmPassword { get; set; }
   }
   