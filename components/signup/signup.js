// sign up landing page
steal(
	"framework/toggle/",
	function(){
		can.getObject("SOA.CM.SignUp", window, true);
		SOA.CM.SignUp = can.Control.extend({
			init : function(element, options){
				element.html( can.view('components/signup/signup.ejs',{}) );
			}
		})
		console.log("Signup Page Loaded");
		//System.import("framework/jquery/");




	});