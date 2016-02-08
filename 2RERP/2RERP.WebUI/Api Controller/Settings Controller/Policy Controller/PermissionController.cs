using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace _2RERP.WebUI.Api_Controller
{
    public class PermissionController : ApiController
    {
        // GET api/permission
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/permission/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/permission
        public void Post([FromBody]string value)
        {
        }

        // PUT api/permission/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/permission/5
        public void Delete(int id)
        {
        }
    }
}
