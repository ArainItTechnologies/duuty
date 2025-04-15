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

    public EmailSender(IOptions<SmtpConfig> emailSettings)
    {
        _emailSettings = emailSettings.Value;
    }

    public async Task SendEmailAsync(string toEmail, string subject, string message)
    {
        var email = new MimeMessage();
        email.From.Add(new MailboxAddress(_emailSettings.SenderName, _emailSettings.SenderEmail));
        email.To.Add(MailboxAddress.Parse(toEmail));
        email.Subject = subject;

        string htmlMessage = @"
    <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { width: 100%; max-width: 600px; margin: 0 auto; }
                .header { text-align: center; background-color: #f4f4f4; padding: 20px; }
                .content { padding: 20px; }
                .footer { text-align: center; font-size: 12px; color: #777; }
                .confirmation-btn { display: inline-block; padding: 10px 20px; background-color: #4CAF50; color: white; text-decoration: none; border-radius: 5px; font-size: 16px; }
                .confirmation-btn:hover { background-color: #45a049; }
                .link-text { color: #007bff; text-decoration: none; font-weight: bold; }
                .link-text:hover { text-decoration: underline; }
            </style>
        </head>
        <body>
            <div class='container'>
                <div class='header'>
                    <h1>Welcome to Duuty!</h1>
                </div>
                <div class='content'>
                    <h2>Confirm Your Email Address</h2>
                    <p>Thank you for registering with us. To complete your registration, please confirm your email by <a href='{message}' class='link-text'>clicking here</a>:</p>
                    <p>If you did not register with us, please ignore this email.</p>
                </div>
                <div class='footer'>
                    <p>&copy; 2025 DUUTY. All Rights Reserved.</p>
                </div>
            </div>
        </body>
    </html>";

        email.Body = new TextPart("html") { Text = htmlMessage };


        using var smtp = new SmtpClient();
        try
        {
            await smtp.ConnectAsync(_emailSettings.SmtpServer, _emailSettings.SmtpPort, SecureSocketOptions.StartTls);
            await smtp.AuthenticateAsync(_emailSettings.Username, _emailSettings.Password);
            await smtp.SendAsync(email);
        }
        finally
        {
            await smtp.DisconnectAsync(true);
        }
    }
}