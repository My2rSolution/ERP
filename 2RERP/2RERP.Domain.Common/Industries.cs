using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2RERP.Domain.Common
{
   
    public class Industries:MongoEntity
    {
        public int industry_id { get; set; }
        public string industry_name { get; set; }
        public int parent_industry_id { get; set; }
        public int audit_user_id { get; set; }
        public string audit_ts { get; set; }
    }

}
