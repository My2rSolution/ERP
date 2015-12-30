using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;
using MongoDB.Bson;

namespace _2RERP.Domain.Common
{
    public class BsonObjectIdBinder : IModelBinder
    {
        public object BindModel(ControllerContext controllerContext, ModelBindingContext bindingContext)
        {
            var valueProviderResults = bindingContext.ValueProvider.GetValue(bindingContext.ModelName);
            //throw new NotImplementedException();
            return new ObjectId(valueProviderResults.AttemptedValue);
        }
    }
}
