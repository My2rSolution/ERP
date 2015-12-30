using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2RERP.Domain.Common
{
    public class Gender : MongoEntity
    {
        public string gender_code { get; set; }
        public string gender_name { get; set; }
        public int audit_user_id { get; set; }
        public string audit_ts { get; set; }
    }

}
