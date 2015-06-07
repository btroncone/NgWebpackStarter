import angular from 'angular';
import routes from './app.routes';
import controllers from './controllers';
import services from './services';
const myApp = angular.module('myApp', [require('angular-ui-router')]);

if(TEST){
	require('angular-mocks/angular-mocks')
}
//config - routes, constants, etc.
routes(myApp);

//controllers
controllers(myApp);

//services
services(myApp);

//directives
