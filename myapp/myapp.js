//import can from 'can/can';
steal(
	"can",
	 function () {
		// Main Page
		 console.log("Main page");
		 System.import("components/landing/").then(
			 function(){
				 new SOA.CM.Landing('body');
			 }
		 );


	 });