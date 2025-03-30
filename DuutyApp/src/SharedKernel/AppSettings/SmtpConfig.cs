using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SharedKernel.AppSettings;

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
