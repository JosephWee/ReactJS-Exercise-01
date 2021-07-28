using JavaScriptEngineSwitcher.ChakraCore;
using JavaScriptEngineSwitcher.Core;
//using JavaScriptEngineSwitcher.Jint;
//using JavaScriptEngineSwitcher.Jurassic;
//using JavaScriptEngineSwitcher.Msie;
//using JavaScriptEngineSwitcher.NiL;
//using JavaScriptEngineSwitcher.Node;
//using JavaScriptEngineSwitcher.V8;
//using JavaScriptEngineSwitcher.Vroom;

namespace ReactWebApp
{
	public class JsEngineSwitcherConfig
	{
		/// <summary>
		/// Attempt to Transform JSX files to JS files (with equivalent React.createElement calls) was unsuccessful
		/// For more information please see:
		/// https://reactjs.net/tutorials/aspnet4.html
		/// https://babeljs.io/setup#installation
		/// https://docs.microsoft.com/en-us/visualstudio/modeling/writing-a-t4-text-template?view=vs-2019
		/// https://github.com/Taritsyn/JavaScriptEngineSwitcher/wiki/Registration-of-JS-engines
		/// </summary>
		/// <param name="engineSwitcher"></param>
		public static void Configure(IJsEngineSwitcher engineSwitcher)
		{
			//engineSwitcher.EngineFactories
			//	.AddChakraCore()
			//	.AddJint()
			//	.AddJurassic()
			//	.AddMsie(new MsieSettings
			//	{
			//		EngineMode = JsEngineMode.ChakraIeJsRt
			//	})
			//	.AddNiL()
			//	.AddNode()
			//	.AddV8()
			//	.AddVroom();

			engineSwitcher.EngineFactories.AddChakraCore();

			engineSwitcher.DefaultEngineName = ChakraCoreJsEngine.EngineName;
		}
	}
}