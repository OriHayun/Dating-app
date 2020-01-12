using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using tinder_react_server.Models;

namespace tinder_react_server.Controllers
{
    public class usersController : ApiController
    {
        // GET api/<controller>
        public List<tinderUser> Get()
        {
            tinderUser u = new tinderUser();
            return u.getUsers();
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public int Post([FromBody] tinderUser u)
        {
            return u.inserUser(u);
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}