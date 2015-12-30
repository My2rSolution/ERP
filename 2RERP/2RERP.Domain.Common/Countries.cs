using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using _2RERP.BusinessInterfaces;

namespace _2RERP.Domain.Common
{
  [BsonIgnoreExtraElements]
  public class Countries: MongoEntity
  {
      
        public int country_id { get; set; }
        public string country_code { get; set; }
        public string country_name { get; set; }
        public int audit_user_id { get; set; }
        public string audit_ts { get; set; }
    }
}
