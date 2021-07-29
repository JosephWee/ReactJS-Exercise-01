using React;
using JavaScriptEngineSwitcher.ChakraCore;
using JavaScriptEngineSwitcher.Core;
using System.Collections.Generic;
using System.Reflection;
using System;
using System.Linq;
using System.IO;
//using JavaScriptEngineSwitcher.Jint;
//using JavaScriptEngineSwitcher.Jurassic;
//using JavaScriptEngineSwitcher.Msie;
//using JavaScriptEngineSwitcher.NiL;
//using JavaScriptEngineSwitcher.Node;
//using JavaScriptEngineSwitcher.V8;
//using JavaScriptEngineSwitcher.Vroom;

[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(ReactWebApp.ReactConfig), "Configure")]
namespace ReactWebApp
{
	public static class ReactConfig
	{
		public static void Configure()
		{
			JsEngineSwitcher.Current.DefaultEngineName = ChakraCoreJsEngine.EngineName;
			JsEngineSwitcher.Current.EngineFactories.AddChakraCore();

            // If you want to use server-side rendering of React components, 
            // add all the necessary JavaScript files here. This includes 
            // your components as well as all of their dependencies.
            // See http://reactjs.net/ for more information. Example:

            ReactSiteConfiguration.Configuration
                .AddScript("~/JSX/{jsxFile}.jsx");

            // If you use an external build too (for example, Babel, Webpack,
            // Browserify or Gulp), you can improve performance by disabling 
            // ReactJS.NET's version of Babel and loading the pre-transpiled 
            // scripts. Example:
            //ReactSiteConfiguration.Configuration
            //	.SetLoadBabel(false)
            //	.AddScriptWithoutTransform("~/Scripts/bundle.server.js")
        }
	}
}