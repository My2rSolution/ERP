using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2RERP.Domain.Common
{
   
    
    public class marital_statuses : MongoEntity
    {
        public int marital_status_id { get; set; }
        public string marital_status_code { get; set; }
        public string marital_status_name { get; set; }
        public bool is_legally_recognized_marriage { get; set; }
        public int audit_user_id { get; set; }
        public string audit_ts { get; set; }
    }


}
