using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using _2RERP.Domain.Common;

namespace _2RERP.Domain.Office
{
  
    public class Users : MongoEntity
    {
        public int user_id { get; set; }
        public int role_id { get; set; }
        public int department_id { get; set; }
        public int office_id { get; set; }
        public string user_name { get; set; }
        public string full_name { get; set; }
        public bool can_change_password { get; set; }
        public string password { get; set; }
        public bool elevated { get; set; }
        public int audit_user_id { get; set; }
        public string audit_ts { get; set; }
        public int store_id { get; set; }
    }

}
