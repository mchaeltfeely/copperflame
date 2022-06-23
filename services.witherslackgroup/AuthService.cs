using Microsoft.IdentityModel.Tokens;
using models.witherslackgroup.auth;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace services.witherslackgroup
{
    public class AuthService
    {

        public static string Secret
        {
            get
            {
                return "LVp0LjHMg7PQPOUIRYqu";
            }
        }

        public LoginResponse Authenticate(LoginRequest loginRequest)
        {

            /*
                Authenticate will create a mock user and generate a token for them to access the system.
             */

            LoginResponse res = new LoginResponse();

            res.user = new User() { name = "Test User", firstname = "Test", lastname = "User", email = "test@test.com", title = "mr", telephone = "0151", username = "test.test.test", departmentName = "Head Office", id = Guid.NewGuid().ToString(), sessionID = Guid.NewGuid().ToString() };


            // authentication successful so generate jwt token
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(AuthService.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name,res.user.name),
                    new Claim(ClaimTypes.UserData,res.user.sessionID)

                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            res.token = tokenHandler.WriteToken(token);
            res.accessToken = res.token;


            return res;
        }

    }
}
