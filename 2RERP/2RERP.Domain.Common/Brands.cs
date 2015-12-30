using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2RERP.Domain.Common
{
    public class Brands : MongoEntity
    {
        public int brand_id { get; set; }
        public string brand_code { get; set; }
        public string brand_name { get; set; }
        public int audit_user_id { get; set; }
        public string audit_ts { get; set; }
    }
}
