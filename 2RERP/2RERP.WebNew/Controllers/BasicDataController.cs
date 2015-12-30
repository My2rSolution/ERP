using System;
using System.Collections.Generic;
using System.Web.Http;
using MongoDB.Bson;
using MongoDB.Bson.IO;
using Newtonsoft.Json.Linq;
using _2RERP.Domain.Common;
using _2RERP.RepositoryInterfaces.ComonRepository;

namespace _2RERP.WebNew.Controllers
{
    public class BasicDataController : ApiController
    {
        private readonly ICountries _countries;
       // private readonly IStates _countries;
        public BasicDataController(ICountries countries)
        {
            _countries = countries;

        }
        public JArray Get()
        {
            IList<Countries> objCountrieses = new List<Countries>();
            objCountrieses = _countries.GetAllData();
            return JArray.Parse(objCountrieses.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
        }

        //public IList<Countries> GetCountrieses()
        //{
        //    try
        //    {
        //        IList<Countries> objCountrieses = new List<Countries>();
        //        objCountrieses = _countries.GetAllData();
        //        return objCountrieses;
        //    }
        //    catch (Exception)
        //    {
                
        //        throw;
        //    }
        //}

        public JArray Post(Countries obj)    //insert data to the user table
        {
            ObjectId i ;
            i= _countries.Create(obj);
            IList<Countries> objCountrieses = new List<Countries>();
            objCountrieses = _countries.GetAllData();
            return JArray.Parse(objCountrieses.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
            //ConnectionDal objdal = new ConnectionDal();
            //string isValid = "";
            //int id = 0;
            //if (obj != null)
            //{

            //    try
            //    {
            //        obj.TimeCreated = DateTime.Now;
            //        obj.TimeModified = DateTime.Now;
            //        objdal.Users.Add(obj);
            //        objdal.SaveChanges();
            //        objdal = new ConnectionDal();
            //        getuserdata = objdal.Users.Where(x => x.UserName == obj.UserName && x.Email == obj.Email).FirstOrDefault();
            //        id = getuserdata.ID;
            //    }
            //    catch (Exception ex)
            //    {

            //    }
            //}
            //return i;
        }
    }
}
