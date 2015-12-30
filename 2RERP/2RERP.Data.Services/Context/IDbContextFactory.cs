using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Driver;
using _2RERP.BusinessInterfaces;

namespace _2RERP.Data.Services.Context
{
    //public interface IDbContextFactory<T> where T : IMongoObjectEntity
    //{
    //    MongoCollection<T> GetMongoCollection();
    //   // object Get();
    //}
    public interface IDbContextFactory: IMongoObjectEntity
    {
        MongoCollection GetMongoCollection();
        // object Get();
    }
}
