(function(){
	'use strict';

	angular.module('app').controller('TimelineCtrl', TimelineCtrl);

	TimelineCtrl.$inject = ['$location', '$scope', 'getTimeline'];

	function TimelineCtrl($location, $scope, getTimeline){
		var vm = this;
		vm.posts = getTimeline;

		angular.forEach(vm.posts, function(value, key){
			var date = value.date.replace(' ', '');
			value.date = new Date(date);
		});

		vm.orderBy = function(field, direction){
			vm.order = field;
			vm.direction = direction;
		};

		$scope.$watch('toggle', function(){
			$scope.toggleTextFilter = $scope.toggle ? 'Hide' : 'Show';
		})
	};
})();