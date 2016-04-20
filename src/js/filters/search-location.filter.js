(function(){
	'use strict';

	angular.module('app').filter('searchLocation', searchLocation);

	function searchLocation() {
		return function(arr, searchString) {
			var result = [];

			if (!searchString) {
				return arr;
			};

			searchString = searchString.toLowerCase();
			angular.forEach(arr, function(item) {
				if (item.user.location.toLowerCase().indexOf(searchString) !== -1) {
					result.push(item);
				};
			});

			return result;
		};
	};
})();