using models.witherslackgroup.auth;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace services.witherslackgroup
{
    interface IAuthService
    {
        static string Secret;
        LoginResponse Authenticate(LoginRequest loginRequest);
    }
}
