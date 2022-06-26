using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace services.witherslackgroup
{
    public class AssessService : IAssessService
    {

        /**
         * AssessService
         * 
         * the job of the AssessService is to relay a call to the witherslack web api and download the json
         * data and pass it back to our client application.
         * 
         * to access the Assess service the user must a valid token
         * 
         * changes 
         * the location of the api could be stored in a settings file.
         */
        public AssessService()
        {

        }

        public async Task<List<models.witherslackgroup.assess.AssessSubject>> getAssessData()
        {

            /*
             the data is retrieved from the witherslack azure website
             
             the connect is done via a seperate API to correct the CORS issue and allows us to add authentication

             changes that could be made.
                check to make sure the file exists
                add a server side filter incase the data increases


             */

            var url = @"http://witherslackgroup.azurewebsites.net/assess.json";
            using (HttpClient hc = new HttpClient())
            {
                using (var response = await hc.GetAsync(url))
                {
                    response.EnsureSuccessStatusCode();
                    var s = await response.Content.ReadAsStringAsync();

                    var subjects = JsonConvert.DeserializeObject<List<models.witherslackgroup.assess.AssessSubject>>(s);

                    return subjects;
                }
            }
        }
    }
}
