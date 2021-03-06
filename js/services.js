'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('Mega64.services', [])
	.factory('archives', ['$http', function($http) {
		var data = [];
		return function(callback){
			if(data.length < 1){
				$http({method: 'GET', url: '/data.min.json'})
				.success(function(d){
					data = d;
					callback(data);
				})
				.error(function(){
					callback('error');
				});
			} else {
				callback(data);
			}
		}
	}])
	.directive("scroll", function ($window) {
    return function(scope, element, attrs) {
    	scope.limit = 20;
        angular.element($window).bind("scroll", function() {
             if (($(window).scrollTop() + $(window).height()) > ($(document).height() - 200)) {
             	scope.$apply(function(scope){scope.limit += 10});
             }
        });
    };
});
