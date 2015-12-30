using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Builders;
using _2RERP.BusinessInterfaces;
using _2RERP.Data.Services.Context;
using _2RERP.RepositoryInterfaces.ComonRepository;
using _2RERP.Domain.Common;

namespace _2RERP.Data.Services.Repository
{

    public abstract class Repository<T> : IRepository<T> where T : IMongoObjectEntity 
    {
        protected readonly MongoCollection<T> MongoConnectionHandler;
        private readonly IDbContextFactory _dbContext;
        public virtual ObjectId Create(T entity)
        {
            ObjectId returnid ;
            var result = MongoConnectionHandler.Insert(
                entity,
                new MongoInsertOptions { WriteConcern = WriteConcern.Acknowledged });
            if (result == null)
            {

            }
            returnid =entity.Id;
            return returnid;
        }

        public void Delete(string id)
        {
            var result = MongoConnectionHandler.Remove(
                Query<T>.EQ(e => e.Id,
                new ObjectId(id)),
                RemoveFlags.None, WriteConcern.Acknowledged);
            if (result == null)
            {

            }
        }

        protected Repository()
        {
            MongoConnectionHandler = _2RERPContext<T>.GetMongoCollection;
           // MongoConnectionHandler = (MongoCollection<T>)_dbContext.GetMongoCollection();
        }

        public virtual T GetById(string id)
        {
            var entityQuery = Query<T>.EQ(e => e.Id, new ObjectId(id));
            return MongoConnectionHandler.FindOne(entityQuery);
        }
        public virtual IList<T> GetAllData()
        {
            //var entityQuery = T;
            var dtat = MongoConnectionHandler.FindAllAs<T>();
            return dtat.ToList();
        }
        public abstract void Update(T entity);

    }
}
