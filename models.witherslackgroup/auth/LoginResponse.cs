using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace models.witherslackgroup.auth
{
    public class LoginResponse
    {
        public string token { get; set; }
        public string accessToken { get; set; }

        public User user { get; set; }
    }
}
