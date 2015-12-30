using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2RERP.Domain.Common
{
    public class Counties : MongoEntity
    {
        public int county_id { get; set; }
        public string county_code { get; set; }
        public string county_name { get; set; }
        public int state_id { get; set; }
        public int audit_user_id { get; set; }
        public string audit_ts { get; set; }
    }

}
