// sign up landing page
steal(
	"framework/toggle/",
	function(){
		can.getObject("SOA.CM.TestClient", window, true);
		SOA.CM.TestClient = can.Control.extend({
			init : function(element, options){
				element.html( can.view('components/testclient/testclient.ejs',{}) );
			}
		})
		console.log("TestClient Page Loaded");
		//System.import("framework/jquery/");




	});