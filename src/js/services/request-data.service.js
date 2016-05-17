(function(){
	'use strict';

	angular.module('app').factory('requestData', requestData);

	requestData.$inject = ['$http', '$q', 'config'];

	function requestData($http, $q, config){
		var service = {
			getData: _getData
		};

		return service;

		function _getData() {
			return $http.get(config.baseUrl);
		};
	};
})();