using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using _2RERP.BusinessInterfaces;
using _2RERP.Domain.Common;
using  _2RERP.RepositoryInterfaces.ComonRepository;

namespace _2RERP.RepositoryInterfaces.ComonRepository
{
   public interface ICountries : IRepository<Countries> 
   {
      // void AddCountries();
   }
}
