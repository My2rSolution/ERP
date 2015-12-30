using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Bson;
using Ninject.Modules;
using Ninject.Web.Common;
using _2RERP.BusinessInterfaces;
using _2RERP.Common.Data.Services;
using _2RERP.Data.Services.Context;
using _2RERP.RepositoryInterfaces.ComonRepository;

namespace _2RERP.DependencyResolver.Web
{
    public class RepositoryNinjectModule : NinjectModule
    {
        public override void Load()
        {
              //private readonly IDbContextFactory<T> _dbContext;
          //  Bind<IDbContextFactory>().To<MusicStoreDbContextFactory>().InRequestScope();
            Bind<ICountries>().To<CountriesServices>().InRequestScope();
            //Bind < IDbContextFactory<T>().To<ConnectionMapper<T>>().InRequestScope<T>();
            Bind<IDbContextFactory>().To<ConnectionMapper<T>>().InRequestScope();
            //Bind<IDbContextFactory>().ToSelf().InRequestScope();

            //ConnectionMapper
            //Bind<IAlbumsRepository>().To<AlbumRepository>().InRequestScope();
            //Bind<IArtistRepository>().To<ArtistRepository>().InRequestScope();
            //Bind<ICartRepository>().To<CartRepository>().InRequestScope();
            //Bind<IGenreRepository>().To<GenreRepository>().InRequestScope();
            //Bind<IOrderRepository>().To<OrderRepository>().InRequestScope();
            //Bind<IOrderDetailRepository>().To<OrderDetailRepository>().InRequestScope();
        }

    }

    public class T : IMongoObjectEntity
    {
        public ObjectId Id { get; set; }
    }
}
