using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2RERP.Domain.Common
{
    public class verification_statuses : MongoEntity
    {
        public int verification_status_id { get; set; }
        public string verification_status_name { get; set; }
    }

}
