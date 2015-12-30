using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Driver;
using _2RERP.BusinessInterfaces;

namespace _2RERP.Data.Services.Context
{
    public class ConnectionMapper<T> : IDbContextFactory where T : IMongoObjectEntity
   {
       //private _2RERPContext<T> _context;
       private static MongoCollection<T> _mongoCollection;
       private static MongoDatabase db = null;
       public ConnectionMapper()
       {

           _mongoCollection = _2RERPContext<T>.GetMongoCollection; 
          // return _mongoCollection;
       }
       MongoCollection IDbContextFactory.GetMongoCollection()
       {
           return _mongoCollection;
       }
       private void InitialiseContext()
       {

           //When Using SQLDeploy, we want to update the database ourselves.
           //System.Data.Entity.Database.SetInitializer<MusicStoreDbContext>(null);

           //To Use CodeFirst and have it create the sample data ..  this initialiser will create the database and insert sample data.
           //System.Data.Entity.Database.SetInitializer<MusicStoreDbContext>(new MusicStoreDbInitializer());
           //once up and running, use the following
          // System.Data.Entity.Database.SetInitializer<MusicStoreDbContext>(null);

           //this is a sample of an alternative method
           //System.Data.Entity.Database.SetInitializer<MusicStoreEntities>(new CreateDatabaseIfNotExists<MusicStoreEntities>());

          // _context = new MusicStoreDbContext();

           //if (_context == null)
           //     {

           //         if (_context == null)
           //             _context = new _2RERPContext<T>();
                    
           //     }
                 //_mongoCollection = db.GetCollection<T>(typeof(T).Name.ToLower() + "s");
          // _mongoCollection = _context.GetCollection<T>(typeof(T).Name);
       }

        public ObjectId Id { get; set; }
   }
}
