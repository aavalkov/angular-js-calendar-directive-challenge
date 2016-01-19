var app = angular.module('calendarDemoApp', []);
app.directive('calendar', function(){
	return {
		templateUrl: 'calendar.html',
		restrict: 'E',
		scope: true,
        transclude: true,
		link: function(scope, element, attrs){

		},
		controller: function($scope, $element, $attrs){
			var today = new Date();
			var currentMonth = today.getMonth();
			var currentYear = today.getFullYear();
			
			$scope.currentMonth = currentMonth;
			$scope.currentYear = currentYear;
			
			$scope.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
			$scope.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October', 'November', 'December'];
			$scope.years = [];

			for (var i = 0; i <= 40; i++){
				$scope.years.push(currentYear - 20 + i);
			}

			$scope.selectedMonth = currentMonth;
			$scope.selectedYear = currentYear;

			$scope.newCalendar = function(){
				$scope.range = CalendarRange.getMonthlyRange(new Date($scope.selectedYear, $scope.selectedMonth));
			}


		}
	}
});

