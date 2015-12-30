using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using _2RERP.BusinessInterfaces;
//using _2RERP.RepositoryInterfaces.ComonRepository;

namespace _2RERP.Domain.Common
{
    public class MongoEntity : IMongoObjectEntity
    {
       //[BsonId]
       // public ObjectId Id { get; set; }
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public ObjectId Id { get; set; }
    }
}
