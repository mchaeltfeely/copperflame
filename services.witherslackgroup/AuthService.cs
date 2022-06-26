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
        /**
         * AuthService
         * 
         * the job of the AuthService is to valid the user and generate a token 
         * that the client application can store for later validate against.
         * 
         * changes:
         * the secret could be stored in a settings files
         * the user information could be loaded from a database
         */
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

            // the user information has been hard coded but could be loaded from a database
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

            //generate the token and store and pass it back to the client to be user later
            var token = tokenHandler.CreateToken(tokenDescriptor);
            res.token = tokenHandler.WriteToken(token);
            res.accessToken = res.token;


            return res;
        }

    }
}
