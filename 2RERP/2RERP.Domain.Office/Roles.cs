using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using _2RERP.Domain.Common;

namespace _2RERP.Domain.Office
{
  
    public class Roles : MongoEntity
    {
        public int role_id { get; set; }
        public string role_code { get; set; }
        public string role_name { get; set; }
        public bool is_admin { get; set; }
        public bool is_system { get; set; }
        public int audit_user_id { get; set; }
        public string audit_ts { get; set; }
    }

}
