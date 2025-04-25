namespace Web.Server.Features.Public.Register;

public class RegistrationResponse
{
    public bool IsSuccess { get; set; }
    public string Message { get; set; }
    public string Token { get; set; }
    public string UserId { get; set; }
    public string Error { get; set; }
}
