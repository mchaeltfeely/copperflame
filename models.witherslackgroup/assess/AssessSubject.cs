using System.Collections.Generic;

namespace models.witherslackgroup.assess
{
    public class AssessSubject
    {
        public string subject { get; set; }
        public List<AssessScore> scores {get; set;}
    }
}
