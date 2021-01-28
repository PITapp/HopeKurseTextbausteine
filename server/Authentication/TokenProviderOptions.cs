using System;
using System.Text;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Tokens;

namespace HopeKurseTextbausteine.Authentication
{
    public class TokenProviderOptions
    {
        public static string Audience { get; } = "HopeKurseTextbausteineAudience";
        public static string Issuer { get; } = "HopeKurseTextbausteine";
        public static SymmetricSecurityKey Key { get; } = new SymmetricSecurityKey(Encoding.ASCII.GetBytes("HopeKurseTextbausteineSecretSecurityKeyHopeKurseTextbausteine"));
        public static TimeSpan Expiration { get; } = TimeSpan.FromMinutes(10000);
        public static SigningCredentials SigningCredentials { get; } = new SigningCredentials(Key, SecurityAlgorithms.HmacSha256);
    }
}
