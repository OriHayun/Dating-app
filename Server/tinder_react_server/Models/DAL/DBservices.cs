using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using System.Web.Configuration;
using System.Data;
using System.Text;

namespace tinder_react_server.Models.DAL
{
    public class DBservices
    {
        private SqlConnection connect(String conString)
        {

            // read the connection string from the configuration file
            string cStr = WebConfigurationManager.ConnectionStrings[conString].ConnectionString;
            SqlConnection con = new SqlConnection(cStr);
            con.Open();
            return con;
        }

        private String BuildInsertCommand(tinderUser u)
        {
            String command;

            StringBuilder sb = new StringBuilder();
            // use a string builder to create the dynamic string
            sb.AppendFormat("Values({0},'{1}','{2}')", u.UserId,u.UserName,u.UserImage);
            String prefix = "INSERT INTO likeTable_ori_2020 " + "(UserId,UserName,UserImages)";
            command = prefix + sb.ToString();

            return command;
        }

        private SqlCommand CreateCommand(String CommandSTR, SqlConnection con)
        {

            SqlCommand cmd = new SqlCommand(); // create the command object

            cmd.Connection = con;              // assign the connection to the command object

            cmd.CommandText = CommandSTR;      // can be Select, Insert, Update, Delete 

            cmd.CommandTimeout = 10;           // Time to wait for the execution' The default is 30 seconds

            cmd.CommandType = System.Data.CommandType.Text; // the type of the command, can also be stored procedure

            return cmd;
        }

        public List<tinderUser> getAllUsers()
        {
            List<tinderUser> allUsers = new List<tinderUser>();
            SqlConnection con = null;

            try
            {
                con = connect("tinderUserDBConnectionString");
                string selectSTR = "SELECT * from tinderUers_2020_ori ";
                SqlCommand cmd = new SqlCommand(selectSTR, con);
                SqlDataReader dr = cmd.ExecuteReader(CommandBehavior.CloseConnection);

                while (dr.Read())
                {
                    tinderUser u = new tinderUser();

                    u.UserId = Convert.ToInt32(dr["UserId"]);
                    u.UserName = (string)dr["UserName"];
                    u.UserGender = (string)dr["UserGender"];
                    u.UserAge = Convert.ToInt16(dr["UserAge"]);
                    u.UserHeight = float.Parse(dr["UserHeight"].ToString());
                    u.UserCity = (string)dr["UserCity"];
                    u.UserImage = (string)dr["UserImage"];
                    if (Convert.ToInt16(dr["UserPremium"]) == 1)
                    {
                        u.UserPremium = true;
                        u.UserHobbies = (string)dr["UserHobbies"];
                    }
                    else
                    {
                        u.UserPremium = false;
                        u.UserHobbies = "";
                    }

                    allUsers.Add(u);
                }
                return allUsers;
            }
            catch (Exception ex)
            {

                throw ex;
            }
            finally
            {
                if (con != null)
                {
                    con.Close();
                }
            }
        }

        public int inserUser(tinderUser u)
        {
            SqlConnection con;
            SqlCommand cmd;

            try
            {
                con = connect("tinderUserDBConnectionString"); // create the connection
            }
            catch (Exception ex)
            {
                throw (ex); // write to log
            }

            String cStr = BuildInsertCommand(u);      // helper method to build the insert string

            cmd = CreateCommand(cStr, con);             // create the command

            try
            {
                int numEffected = cmd.ExecuteNonQuery(); // execute the command
                return numEffected;
            }
            catch (Exception ex)
            {
                return 0;
                // write to log
                throw (ex);
            }

            finally
            {
                if (con != null)
                {
                    // close the db connection
                    con.Close();
                }
            }
        }

        public List<favorite> getMyFavorite()
        {
            List<favorite> myFavorite = new List<favorite>();
            SqlConnection con = null;

            try
            {
                con = connect("tinderUserDBConnectionString");
                string selectSTR = "SELECT * from likeTable_ori_2020 ";
                SqlCommand cmd = new SqlCommand(selectSTR, con);
                SqlDataReader dr = cmd.ExecuteReader(CommandBehavior.CloseConnection);

                while (dr.Read())
                {
                    favorite f = new favorite();

                    f.UserId = Convert.ToInt32(dr["UserId"]);
                    f.UserName = (string)dr["UserName"];
                    f.UserImage = (string)dr["UserImages"];

                    myFavorite.Add(f);
                }

                return myFavorite;
            }
            catch (Exception ex)
            {

                throw ex;
            }
            finally
            {
                if (con != null)
                {
                    con.Close();
                }
            }
        }
    }
}