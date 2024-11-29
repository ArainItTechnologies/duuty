namespace DuutyApp.Data.Dtos
{
    public class ApplicationUser
    {
        public required string UserId { get; set; }
        public required string UserName { get; set; }
        public required string Email { get; set; }
        public required IList<string> Roles { get; set; }
    }
}
