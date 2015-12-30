using System.Collections;
using _2RERP.BusinessInterfaces;

namespace _2RERP.BusinessInterfaces
{
    public interface ISessionProvider : ICollection
    {
        object this[string name] { get; set; }
    }
}
