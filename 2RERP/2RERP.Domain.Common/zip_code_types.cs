﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2RERP.Domain.Common
{
    
    public class zip_code_types : MongoEntity
    {
        public int zip_code_type_id { get; set; }
        public string type { get; set; }
        public int audit_user_id { get; set; }
        public string audit_ts { get; set; }
    }

}
