using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Bson;
namespace _2RERP.BusinessInterfaces
{
   public interface IMongoObjectEntity
    {
       ObjectId Id { get; set; }
    }
}
