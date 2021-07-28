using JavaScriptEngineSwitcher.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace ReactWebApp
{
    public class MvcApplication : System.Web.HttpApplication
    {
        /// <summary>
        /// Attempt to Transform JSX files to JS files (with equivalent React.createElement calls) was unsuccessful
        /// For more information please see:
        /// https://reactjs.net/tutorials/aspnet4.html
        /// https://babeljs.io/setup#installation
        /// https://docs.microsoft.com/en-us/visualstudio/modeling/writing-a-t4-text-template?view=vs-2019
        /// https://github.com/Taritsyn/JavaScriptEngineSwitcher/wiki/Registration-of-JS-engines
        /// </summary>
        protected void Application_Start()
        {
            //List<Assembly> assemblies = AppDomain.CurrentDomain.GetAssemblies().ToList();
            //for (int a = 0; a < assemblies.Count; a++)
            //{
            //    Assembly assembly = assemblies[a];
            //    string assemblyName = assembly.FullName;
            //    Console.WriteLine(assemblyName);
            //}

            //AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            //JsEngineSwitcherConfig.Configure(JsEngineSwitcher.Current);
        }
    }
}
