using System.Collections;
using _2RERP.BusinessInterfaces;
namespace _2RERP.BusinessInterfaces
{
    public interface IWebSecurityProvider
    {
        string CreateUserAndAccount(string userName, string password);
        bool Login(string userName, string password);
    }
}