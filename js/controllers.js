'use strict';

/* Controllers */

angular.module('Mega64.controllers', [])
  .controller('ShowCtrl', ['$scope', '$routeParams', '$location', 'archives', function($scope, $routeParams, $location, archives) {
  	$scope.showId = $routeParams.show;
  	$scope.episodeId = $routeParams.episode;
    $scope.searchString = {name: ''};
    $scope.limit = 20;
    $scope.showMore = function(){
      $scope.limit += 5;
    };
  	archives(function(d){
      $scope.shows = d;
  		if($scope.showId){
  			$scope.show = _.findWhere($scope.shows, {'id': $scope.showId});
  			if(!$scope.show){
  				$location.path('/');
  			}
  			if($scope.episodeId){
  				$scope.episode = _.findWhere($scope.show.list, {'id': $scope.episodeId});
          if(!$scope.episode){
            $location.path('/'+$scope.show.id);
          }
  			}
  		}
  	});
  }]);
