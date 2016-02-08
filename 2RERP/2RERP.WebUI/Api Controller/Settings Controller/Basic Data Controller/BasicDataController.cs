using System;
using System.Collections.Generic;
using System.Web.Http;
using MongoDB.Driver;
using MongoDB.Bson;
using MongoDB.Bson.IO;
using Newtonsoft.Json.Linq;
using _2RERP.Domain.Common;
using _2RERP.RepositoryInterfaces.ComonRepository;

namespace _2RERP.WebUI.Controllers
{
    public class BasicDataController : ApiController
    {
        private readonly ICountries _countries;
        private readonly IStates _states;
        private readonly IRoles _roles;
        public BasicDataController(ICountries countries, IStates states, IRoles roles)
        {
            _countries = countries;
            _states = states;
            _roles = roles;

        }
        [HttpGet]
        [ActionName("Country")]
        public JArray Get()
        {
            IList<Countries> objCountrieses = new List<Countries>();
            objCountrieses = _countries.GetAllData();
            return JArray.Parse(objCountrieses.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
        }
        [HttpPost]
        [AllowAnonymous]
        [ActionName("Country")]
        public JArray Post(Countries obj)    //insert data to the user table
        {
            int countryid = _countries.NextSequenceId(obj);
            obj.country_id = countryid;
            obj.audit_ts = DateTime.Now;
            _countries.Create(obj);
            return Get();
           
        }
        [HttpPut]
        [ActionName("Country")]
        public JArray Put(Countries obj)
        {
            try
            {
                _countries.Update(obj);
                return Get();
                //IList<Countries> objCountrieses = new List<Countries>();
                //objCountrieses = _countries.GetAllData();
                //return JArray.Parse(objCountrieses.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
            }
            catch (Exception)
            {

                throw;
            }
        }
        // Get All State by Get Method

        [HttpGet]
        [AllowAnonymous]
        [ActionName("State")]
        public JArray GetState()
        {
            try
            {
                IList<States> objStates = new List<States>();
                objStates = _states.GetAllData();
                return JArray.Parse(objStates.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
            }
            catch (Exception)
            {
                throw;
            }

        }

        //

        // Insert New State by Post Method

        //[HttpPost]
        //[AllowAnonymous]
        //[ActionName("State")]
        //public JArray PostState(States obj)    //insert data to the user table
        //{
        //    try
        //    {
        //        int stateid = _states.NextSequenceId(obj);
        //        obj.state_id = stateid;
        //        obj.audit_ts = DateTime.Now;
        //        ObjectId i;
        //        i = _states.Create(obj);
        //        IList<States> objStates = new List<States>();
        //        objStates = _states.GetAllData();
        //        return JArray.Parse(objStates.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
        //    }
        //    catch (Exception)
        //    {
        //        throw;
        //    }
        //}
        [HttpPost]
        [AllowAnonymous]
        [ActionName("State")]
        public JArray PostState(States obj)    //insert data to the user table
        {
            try
            {
                 _countries.AddState(obj);
                 return GetState();
                 //IList<Countries> objCountrieses = new List<Countries>();
                 //objCountrieses = _countries.GetAllData();
               
                 //return JArray.Parse(objCountrieses.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
            }
            catch (Exception)
            {
                throw;
            }
        }

        //

        // Update State Objects.....

        [HttpPut]
        [AllowAnonymous]
        [ActionName("State")]
        public JArray PutState(States obj) //for Update
        {
            try
            {
                _countries.UpdateState(obj);
                return GetState();
                //IList<Countries> objCountrieses = new List<Countries>();
                //objCountrieses = _countries.GetAllData();
                //return JArray.Parse(objCountrieses.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
            }
            catch (Exception)
            {
                throw;
            }
        }
       
        // Get All Roll by Get Method

        [HttpGet]
        [AllowAnonymous]
        [ActionName("Role")]
        public JArray GetRole()
        {
            try
            {
                IList<Roles> objRoles = new List<Roles>();
                objRoles = _roles.GetAllData();
                return JArray.Parse(objRoles.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
            }
            catch (Exception)
            {
                throw;
            }

        }

        //

        // Insert New Role by Post Method

        [HttpPost]
        [AllowAnonymous]
        [ActionName("Role")]
        public JArray PostRole(Roles objRole)    //insert data to the user table
        {
            try
            {
                int roleid = _roles.NextSequenceId(objRole);
                objRole.role_id = roleid;
                objRole.audit_ts = DateTime.Now;
                ObjectId i;
                _roles.Create(objRole);
                IList<Roles> objrRoleses = new List<Roles>();
                objrRoleses = _roles.GetAllData();
                return JArray.Parse(objrRoleses.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
            }
            catch (Exception)
            {
                throw;
            }

        }

        // Update Roles Objects.....

        [HttpPut]
        [AllowAnonymous]
        [ActionName("Role")]
        public JArray PutRole(Roles obj)
        {
            try
            {
                _roles.Update(obj);
                IList<Roles> objRoles = new List<Roles>();
                objRoles = _roles.GetAllData();
                return JArray.Parse(objRoles.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
            }
            catch (Exception)
            {
                throw;
            }

        }

        //
    }
}
