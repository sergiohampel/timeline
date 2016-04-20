(function(){
	'use strict';

	angular.module('app').config(route);

	route.$inject = ['$routeProvider'];

	function route($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'views/timeline.html',
				controller: 'TimelineCtrl',
				controllerAs: 'vm',
				resolve: {
					getTimeline: function(requestData){
						return requestData.getData('https://gist.githubusercontent.com/renatooliveira/35a994c1b0aa6917928a918eafab9b40/raw/8c1f473e0fab7ae13485dc5c4ac712798a8e5e31/timeline.json', 'get', '', 'json');
					}
				}
			})
			.otherwise({redirectTo: '/'});
	};
})();