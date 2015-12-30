using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace _2RERP.Common
{
   public class Validation
    {
       public static bool IsValidEmailAdress(string email)
       {
           Regex regex = new Regex(@"^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$");
           Match match = regex.Match(email);
           return match.Success;
       }
    }
}
