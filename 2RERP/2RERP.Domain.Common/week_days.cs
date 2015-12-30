using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2RERP.Domain.Common
{
   public class week_days : MongoEntity
    {
        public string _id { get; set; }
        public int week_day_id { get; set; }
        public string week_day_code { get; set; }
        public string week_day_name { get; set; }
    }
}
