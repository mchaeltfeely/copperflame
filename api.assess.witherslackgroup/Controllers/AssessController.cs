using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using services.witherslackgroup;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.assess.witherslackgroup.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class AssessController : ControllerBase
    {

        /*
            the assess controller will provide access to the data provide the user
            has logged in correctly via the auth api

            it is dependant on the services.witherslackgroup group prject.
         */


        public AssessService aw { get; set; }

        public AssessController(AssessService aw)
        {
            this.aw = aw;
        }

        // POST api/<loginController>
        [HttpGet]
        public async Task<IActionResult> Post()
        {
            var assess = await this.aw.getAssessData();
            return Ok(assess);
        }
    }
}
