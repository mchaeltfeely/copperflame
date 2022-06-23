using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using models.witherslackgroup.auth;
using services.witherslackgroup;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.auth.witherslackgroup.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    
    public class LoginController : ControllerBase
    {

        /*
        the auth controller will provide the user with a valid token that can be used to access other areas of the application.

        it is dependant on the services.witherslackgroup group prject.
     */


        public AuthService aw { get; set; }

        public LoginController(AuthService aw)
        {
            this.aw = aw;
        }

        // POST api/<loginController>
        [HttpPost]
        public IActionResult Post([FromBody] LoginRequest value)
        {
            LoginResponse loginResponse = aw.Authenticate(value);
            if (string.IsNullOrWhiteSpace(loginResponse.accessToken))
            {
                return Unauthorized();
            }

            return Ok(loginResponse);
        }
    }
}
