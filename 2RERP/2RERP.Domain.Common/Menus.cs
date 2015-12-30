using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2RERP.Domain.Common
{
    
    public class Rootobject :MongoEntity
    {
        public int menu_id { get; set; }
        public string menu_text { get; set; }
        public string url { get; set; }
        public string menu_code { get; set; }
        public int level { get; set; }
        public int parent_menu_id { get; set; }
        public int audit_user_id { get; set; }
        public string audit_ts { get; set; }
        public int sort { get; set; }
        public string icon { get; set; }
    }

}
