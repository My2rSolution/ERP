using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2RERP.Domain.Common
{
    public class Currencies : MongoEntity
    {
        public string currency_code { get; set; }
        public string currency_symbol { get; set; }
        public string currency_name { get; set; }
        public string hundredth_name { get; set; }
        public int audit_user_id { get; set; }
        public string audit_ts { get; set; }
    }

}
