using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(CTWM2App.Startup))]
namespace CTWM2App
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
        }
    }
}

