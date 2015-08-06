/*framework/dependency_libraries/dep1*/
System.define("framework/dependency_libraries/dep1",'var dep1={test:function(e){console.log(e)}};console.log("Dependency Library Loaded");',{address:"framework/dependency_libraries/dep1",metadata:{deps:[],format:"global"}});
/*framework/toggle/toggle*/
System.define("framework/toggle/toggle",'var toggle={test:function(o){console.log(o)}};console.log("Toggle Library Loaded");',{address:"framework/toggle/toggle",metadata:{deps:["framework/dependency_libraries/dep1"],format:"global"}});
/*components/application/application*/
define("components/application/application",["framework/toggle/toggle"],function(){console.log("Main Application Page with Toggle Dependency")});
//# sourceMappingURL=application.js.map