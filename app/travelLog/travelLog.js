'use strict';

angular.module('myApp.travelLog', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/travelLog', {
    templateUrl: 'travelLog/travelLog.html',
    controller: 'TravelLogCtrl'
  });
}])

.controller('TravelLogCtrl', ['$scope','$http', function($scope, $http) {
	$http.get('resources/data/travellog.json').
    success(function(data, status, headers, config) {
      $scope.content = data;
    }).
    error(function(data, status, headers, config) {
      // log error
    });
	
}]);