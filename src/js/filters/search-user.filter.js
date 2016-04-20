(function(){
	'use strict';

	angular.module('app').filter('searchUsername', searchUsername);

	function searchUsername() {
		return function(arr, searchString) {
			var result = [];

			if (!searchString) {
				return arr;
			};

			searchString = searchString.toLowerCase();
			angular.forEach(arr, function(item) {
				if (item.user.username.toLowerCase().indexOf(searchString) !== -1) {
					result.push(item);
				};
			});

			return result;
		};
	};
})();