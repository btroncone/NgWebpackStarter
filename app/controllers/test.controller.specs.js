export default myApp => {
	require('bardjs/dist/bard');
	var TestController;

	describe('The TestController', () =>{
		beforeEach(() => {
			bard.appModule(myApp.name);
			bard.inject(this, '$controller');
			TestController = $controller('TestController');
		});

		it('should exist', () =>{
			expect(TestController).to.be.defined;
		});

		it('should have a title of Test Controller', () =>{
			expect(TestController.title).to.equal('Test Controller');
		});
	});

}
