using System.Threading;
using System.Web.Http;

namespace NgPlaybook.Server.Api
{
    public class SlowController : ApiController
    {
        public IHttpActionResult Get()
        {
            Thread.Sleep(2000);
            return Ok("Hello!");
        }
    }
}
