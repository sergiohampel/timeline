(function(){
	'use strict';

	angular.module('app').config(route);

	route.$inject = ['$routeProvider'];

	function route($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'views/timeline.html',
				controller: 'TimelineCtrl',
				controllerAs: 'vm'
			})
			.otherwise({redirectTo: '/'});
	};
})();