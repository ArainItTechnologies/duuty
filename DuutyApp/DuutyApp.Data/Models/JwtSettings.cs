using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DuutyApp.Data.Models
{
    public class JwtSettings
    {
        public required string SecretKey { get; set; }
        public required string Issuer { get; set; }
        public required string Audience { get; set; }
        public int ExpiryInMinutes { get; set; }
    }
}