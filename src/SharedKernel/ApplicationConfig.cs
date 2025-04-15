namespace SharedKernel
{
    public class ApplicationConfig
    {
        public SmtpConfig SmtpConfig { get; set; }
    }

    public class SmtpConfig
    {
        public string SmtpServer { get; set; }
        public int SmtpPort { get; set; }
        public string SenderEmail { get; set; }
        public string SenderName { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public bool UseSSL { get; set; }
        public bool UseStartTls { get; set; }
    }
}
