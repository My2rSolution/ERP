using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Driver;
using _2RERP.BusinessInterfaces;

namespace _2RERP.Data.Services.Context
{
    public sealed class _2RERPContext<T>  where T : IMongoObjectEntity
    {
       private static MongoCollection<T> _mongoCollection;
       private static volatile _2RERPContext<T> instance;
       private static object syncLock = new Object();
       private static MongoDatabase db = null;

        public _2RERPContext()
       {
           //var client = new MongoClient("mongodb://192.168.1.5:27017");
           var client = new MongoClient("mongodb://localhost:27017");

           var mongoServer = client.GetServer();
           const string DatabaseName = "mixerp_raw";
           db = mongoServer.GetDatabase(DatabaseName);
           // MongoCollection<T> GetMongoCollections = GetMongoCollection;


       }

       public static MongoCollection<T> GetMongoCollection
       {
             get 
            {
                if (instance == null)
                {
                    lock (syncLock)
                    {
                        if (instance == null)
                            instance = new _2RERPContext<T>();
                    }
                }
                 //_mongoCollection = db.GetCollection<T>(typeof(T).Name.ToLower() + "s");
                _mongoCollection = db.GetCollection<T>(typeof(T).Name);
                return _mongoCollection;
            }
       }

       // MongoCollection<T> IDbContextFactory<T>.GetMongoCollection()
       //{
       //    return _mongoCollection;
       //}
    }
}
