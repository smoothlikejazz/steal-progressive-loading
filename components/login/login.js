// login landing page
steal(
	"framework/toggle/",
	function(){
		can.getObject("SOA.CM.Login", window, true);
		SOA.CM.Login = can.Control.extend({
			init : function(element, options){
				element.html( can.view('components/login/login.ejs',{}) );
			}
		})
		console.log("Login Page Loaded");
		//System.import("framework/jquery/");



	});