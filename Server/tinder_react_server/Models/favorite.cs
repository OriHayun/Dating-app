using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using tinder_react_server.Models.DAL;

namespace tinder_react_server.Models
{
    public class favorite
    {
        int userId;
        string userName;
        string userImage;

        public int UserId { get { return userId; } set { userId = value; } }
        public string UserName { get { return userName; } set { userName = value; } }
        public string UserImage { get { return userImage; } set { userImage = value; } }


        public List<favorite> getMyFavorite()
        {
            DBservices dbs = new DBservices();
            return dbs.getMyFavorite();
        }
    }
}