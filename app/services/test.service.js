export default myApp => {

	class TestService{
		constructor($q){
			this.people = [{name: 'Brian'}, {name: 'Joe'}, {name: 'Frank'}]
			this.$q = $q;
		}

		getPeople(){
			return this.$q.when(this.people);
		}
	}

	myApp.service('TestService', TestService);
}