using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Driver;
using _2RERP.BusinessInterfaces;
using _2RERP.Domain.Common;

namespace _2RERP.RepositoryInterfaces.ComonRepository
{
    public interface IRepository<T>
    {
        ObjectId Create(T entity);
        void Delete(string id);
        T GetById(string id);
        IList<T> GetAllData();
        void Update(T entity);
    }
}
