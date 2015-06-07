export default myApp => {

	class TestController{
		constructor(TestService){
			this.title = 'Test Controller';
			TestService.getPeople().then(people => this.people = people);
		}

		sayHello(){
			this.title = 'Hello from the Controller!';
		}
	}

	myApp.controller('TestController', TestController);

	if(TEST){
		require('./test.controller.specs')(myApp);
	}
}