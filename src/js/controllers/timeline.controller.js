(function(){
	'use strict';

	angular.module('app').controller('TimelineCtrl', TimelineCtrl);

	TimelineCtrl.$inject = ['$scope', 'requestData'];

	function TimelineCtrl($scope, requestData){
		var vm = this;
		vm.posts = '';

		vm.init = function(){
			requestData.getData().success(function(data){
				vm.posts = data;
			});
		};

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