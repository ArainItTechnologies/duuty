using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.Extensions.Options;
using MimeKit;
using SharedKernel;

namespace Application;

public class EmailSender : IEmailSender
{
    private readonly SmtpConfig _emailSettings;

    public EmailSender(IOptions<SmtpConfig> emailSettings) => _emailSettings = emailSettings.Value;

    public async Task SendEmailAsync(string toEmail, string subject, string message)
    {
        var email = new MimeMessage();
        email.From.Add(new MailboxAddress(_emailSettings.SenderName, _emailSettings.SenderEmail));
        email.To.Add(MailboxAddress.Parse(toEmail));
        email.Subject = subject;

        string htmlContent = subject switch
        {
            EmailType.Confirm => $@"
                        <h2>Confirm Your Email</h2>
                        <p>Thanks for registering! Please confirm your email by <a href='{message}' className='link-text'>clicking here</a>.</p>
                        <p>If you didn’t register, just ignore this email.</p>",

            EmailType.Reset => $@"
                        <h2>Password Reset Request</h2>
                        <p>We received a request to reset your password. Reset it by <a href='{message}' className='link-text'>clicking here</a>.</p>
                        <p>If you didn’t request this, you can safely ignore this email.</p>",

            EmailType.PasswordUpdated => $@"
                        <h2>Password Updated</h2>
                        <p>Your password has been successfully updated.</p>
                        <p>If you did not perform this action, please contact support immediately.</p>",
            EmailType.Verified => $@"
                        <h2>Email Successfully Verified</h2>
                        <p>Your email address has been successfully verified. You can now access all features of your account.</p>
                        <p>Thanks for verifying your email!</p>",

            _ => $"<p>{message}</p>"
        };

        string htmlMessage = $@"
                    <html>
                        <head>
                            <style>
                                body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
                                .container {{ width: 100%; max-width: 600px; margin: 0 auto; }}
                                .header {{ text-align: center; background-color: #f4f4f4; padding: 20px; }}
                                .content {{ padding: 20px; }}
                                .footer {{ text-align: center; font-size: 12px; color: #777; }}
                                .link-text {{ color: #007bff; text-decoration: none; font-weight: bold; }}
                                .link-text:hover {{ text-decoration: underline; }}
                            </style>
                        </head>
                        <body>
                            <div className='container'>
                                <div className='header'>
                                    <h1>DUUTY</h1>
                                </div>
                                <div className='content'>
                                    {htmlContent}
                                </div>
                                <div className='footer'>
                                    <p>&copy; 2025 DUUTY. All Rights Reserved.</p>
                                </div>
                            </div>
                        </body>
                    </html>";

        var bodyBuilder = new BodyBuilder
        {
            HtmlBody = htmlMessage,
            TextBody = $"{subject}: {message}"
        };
        email.Body = bodyBuilder.ToMessageBody();

        using var smtp = new SmtpClient();
        try
        {
            await smtp.ConnectAsync(_emailSettings.SmtpServer, _emailSettings.SmtpPort, SecureSocketOptions.Auto, CancellationToken.None);
            await smtp.AuthenticateAsync(_emailSettings.Username, _emailSettings.Password);
            await smtp.SendAsync(email);
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Email sending failed: {ex.Message}");
            throw;
        }
        finally
        {
            await smtp.DisconnectAsync(true);
        }
    }
}