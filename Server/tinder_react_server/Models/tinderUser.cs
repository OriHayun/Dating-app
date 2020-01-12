using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using tinder_react_server.Models.DAL;

namespace tinder_react_server.Models
{
    public class tinderUser
    {
        int userId;
        string userName;
        string userGender;
        int userAge;
        float userHeight;
        string userCity;
        string userImage;
        bool userPremium;
        string userHobbies;

        public int UserId { get { return userId; } set { userId = value; } }
        public string UserName { get { return userName; } set { userName = value; } }
        public string UserGender { get { return userGender; } set { userGender = value; } }
        public int UserAge { get { return userAge; } set { userAge = value; } }
        public float UserHeight { get { return userHeight; } set { userHeight = value; } }
        public string UserCity { get { return userCity; } set { userCity = value; } }
        public string UserImage { get { return userImage; } set { userImage = value; } }
        public bool UserPremium { get { return userPremium; } set { userPremium = value; } }
        public string UserHobbies { get { return userHobbies; } set { userHobbies = value; } }


        public List<tinderUser> getUsers()
        {
            DBservices dbs = new DBservices();
            return dbs.getAllUsers();
        }

        public int inserUser(tinderUser u)
        {
            DBservices dbs = new DBservices();
            return dbs.inserUser(u);
        }
    }
}