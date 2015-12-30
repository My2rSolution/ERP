using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using _2RERP.Domain.Common;

namespace _2RERP.Domain.Policy
{
    public class menu_access : MongoEntity
    {
        public int access_id { get; set; }
        public int office_id { get; set; }
        public int menu_id { get; set; }
        public int user_id { get; set; }
    }

}
