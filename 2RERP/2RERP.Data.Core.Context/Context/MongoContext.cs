using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Driver;

namespace _2RERP.Data.Core.Context.Context
{
   public class MongoContext
    {
        private static volatile MongoContext instance;
        private static object syncLock = new Object();

        const string ConnectionString = "mongodb://localhost";
        private static MongoDatabase db = null;

        private MongoContext()
        {
            var client = new MongoClient();
            MongoServer server = client.GetServer();
            server.Connect();

            db = server.GetDatabase("myDb");
        }

        public static MongoDatabase GetMongoDatabase
        {
            get 
            {
                // single tone pattern has been used
                if (instance == null)
                {
                    lock (syncLock)
                    {
                        if (instance == null)
                            instance = new MongoContext();
                    }
                }

                return db;
            }
        }
    }
}
