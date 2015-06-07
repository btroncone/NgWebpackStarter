export default myApp => {
	myApp.config(($stateProvider, $urlRouterProvider) => {
		$stateProvider
	        .state('index', {
	          url: "/",
	          template: require('./views/test.html'),
	          controller: "TestController as vm"
	        });

    	$urlRouterProvider.otherwise('/');
	})
}