using System;
using System.Collections.Generic;
using System.ComponentModel.Design;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using MongoDB.Bson;
using MongoDB.Bson.IO;
using Newtonsoft.Json.Linq;
using _2RERP.Domain.Common;
using _2RERP.RepositoryInterfaces.ComonRepository;

namespace _2RERP.WebUI.Api_Controller
{
    public class PermissionController : ApiController
    {
        private readonly IMenus _menus;
        //private readonly IMenuChild _menuChild;

        public PermissionController(IMenus menus)
        {
            _menus = menus;
        }

        // GET api/permission
        
        [HttpGet]
        [AllowAnonymous]
        [ActionName("Menus")]
        public JArray Get()
        {
            IList<Menus> objMenus = new List<Menus>();
            objMenus = _menus.GetAllData();
            return JArray.Parse(objMenus.ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
        }

        // GET api/permission/5
        [HttpGet]
        [AllowAnonymous]
        [ActionName("Menus")]
        public JArray Get(int id)
        {
            return JArray.Parse("".ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
           // return "value";
        }

        // POST api/permission
        [HttpPost]
        [AllowAnonymous]
        [ActionName("Menus")]
        public JArray Post(Menus objMenu)
        {
            try
            {
                bool isinserted = _menus.InsertMenu(objMenu);
                if (isinserted == true)
                {
                    return Get();
                }
                else
                {

                    return JArray.Parse("data:Failed to insert".ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
                }
                //_menus.Create(objMenu);
                

            }
            catch (Exception)
            {
                
                throw;
            }
            // return JArray.Parse("data:Failed to insert".ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict })) MenuPermissionWithRole objMenuPermissionWithRole;
        }
        [HttpPost]
        [AllowAnonymous]
        [ActionName("Permission")]
        public JArray Postm(Menus objMenuPermissionWithRole)
        {
            try
            {
                if (objMenuPermissionWithRole !=null)
                {
                    return Get();
                }
            }
            catch (Exception)
            {

                
            }
            return JArray.Parse("data:Failed to Insert".ToJson(new JsonWriterSettings { OutputMode = JsonOutputMode.Strict }));
        }

        // PUT api/permission/5
        [HttpPut]
        [AllowAnonymous]
        [ActionName("Menus")]
        public void Put(int id, [FromBody]string value)
        {
        }
        [HttpDelete]
        [AllowAnonymous]
        [ActionName("Menus")]
        // DELETE api/permission/5
        public void Delete(int id)
        {
        }
    }
}
