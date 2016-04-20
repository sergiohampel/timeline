(function(){
	'use strict';

	angular.module('app').factory('requestData', requestData);

	requestData.$inject = ['$http', '$q'];

	function requestData($http, $q){
		var service = {
			getData: _getData
		};

		return service;

		function _getData(url, method, params, type) {
			var deferred = $q.defer();

			$http({
					url: url,
					method: method,
					params: params,
					responseType: type
				})
				.success(function(response) {
					deferred.resolve(response);
				})
				.error(function(response, status) {
					deferred.reject(response);
				});

			return deferred.promise;
		};
	};
})();