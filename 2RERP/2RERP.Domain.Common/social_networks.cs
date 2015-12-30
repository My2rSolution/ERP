using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2RERP.Domain.Common
{
    public class social_networks : MongoEntity
    {
        public string social_network_name { get; set; }
        public string semantic_css_class { get; set; }
        public string base_url { get; set; }
        public string profile_url { get; set; }
        public int audit_user_id { get; set; }
        public string audit_ts { get; set; }
    }

}
