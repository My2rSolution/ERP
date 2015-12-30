using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using _2RERP.BusinessInterfaces;
using _2RERP.Data.Services.Context;
using _2RERP.Data.Services.Repository;
using _2RERP.Domain.Common;
using _2RERP.RepositoryInterfaces.ComonRepository;
using DLLLibrary;
namespace _2RERP.Common.Data.Services
{
    public class CountriesServices :Repository<Countries>, ICountries
    {

        public override void Update(Countries entity)
        {
            //throw new NotImplementedException();
        }

        //public CountriesServices(IDbContextFactory<Countries> dbContext) : base(dbContext)
        //{
        //}
        //public CountriesServices(IDbContextFactory<Countries> dbContext) : base(dbContext)
        //{
        //}
        //public CountriesServices(IDbContextFactory dbContext) : base(dbContext)
        //{
        //}
    }
}
