// sign up landing page
steal(

	function(){
		can.getObject("SOA.CM.Landing", window, true);

		SOA.CM.Landing = can.Control.extend({
			init : function(element, options){

				element.html( can.view('components/landing/landing.ejs',{}) );
			},
			"ul li click" : function(li, event){
				switch(li.data().target){
					case "signup":
						System.import("components/signup/").then(
							function(){
								new SOA.CM.SignUp('.content');
							}
						);
						break;
					case "login":
						System.import("components/login/").then(
							function(){
								new SOA.CM.Login('.content');
							}
						);
						break;
					case "testclient":
						System.import("components/testclient/").then(
							function(){
								new SOA.CM.TestClient('.content');
							}
						);
						break;
				}

			}
		})
		console.log("Landing Page with Toggle as a dependency");
		//System.import("framework/jquery/");




	});