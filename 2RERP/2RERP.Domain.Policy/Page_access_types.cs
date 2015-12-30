using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using _2RERP.Domain.Common;

namespace _2RERP.Domain.Policy
{
    public class Page_access_types : MongoEntity
    {
        public int access_type_id { get; set; }
        public string access_type_name { get; set; }
    }

}
