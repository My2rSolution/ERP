using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Bson.Serialization.Attributes;

namespace _2RERP.Domain.Common
{
    [BsonIgnoreExtraElements]
  public class States : MongoEntity
    {
    public int state_id { get; set; }
    public int country_id { get; set; }
    public string state_code { get; set; }
    public string state_name { get; set; }
    public int audit_user_id { get; set; }
    public string audit_ts { get; set; }
    }

   
}
