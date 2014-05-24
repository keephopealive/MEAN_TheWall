var myApp = angular.module('myApp', ['ngRoute']);


myApp.config(function ($routeProvider){
	$routeProvider
		.when('/main',
			{
				controller: 'SimpleController',
				templateUrl: '/javascripts/partials/main.html'
			})
		.when('/login',
			{
				controller: 'SimpleController',
				templateUrl: '/javascripts/partials/login.html'
			})
		.when('/registration',
			{
				controller: 'SimpleController',
				templateUrl: '/javascripts/partials/registration.html'
			})
		.otherwise({ redirectTo: '/main'});
});




myApp.controller('GuestController', function($scope, UsersFactory){
	$scope.addUser = function(){
		UsersFactory.addUser($scope.new_user, function(err){
		$scope.errors = err;
		});
	};
});



// Factory (can do function($http) )
myApp.factory('simpleFactory', function(){
	var customers = [
		{name:'John Smith', city:'Phoenix'}, 
		{name:'John Doe', city:'Chicago'}, 
		{name:'Jane Doe', city:'Seattle'}
	];

	var factory = {}; // factory is an object - which has the following methods: (getCustomers, and postCustomers)

	factory.getCustomers = function(){ //factory.getCustomers = this.getCustomers (for service as oppose to factory)
			return customers;
	};
	factory.postCustomer = function(customer) { // factory.postCustomers = this.postCustomers (for service as oppose to factory)

	};
	return factory;
});