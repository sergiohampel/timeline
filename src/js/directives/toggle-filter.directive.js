(function(){
	'use strict';

	angular.module('app').directive('toggleFilter', toggleClass);

	function toggleClass(){
		return {
			restrict: 'A',
			link: function(scope, element, attrs) {
				element.bind('click', function(e) {
					element.parent().toggleClass('show');
				});
			}
		};
	};
})();