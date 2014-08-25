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
	.directive('scrolly', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var raw = element[0];
                
            element.bind('scroll', function () {
                if (raw.scrollTop + raw.offsetHeight > raw.scrollHeight) {
                    scope.$apply(attrs.scrolly);
                }
            });
        }
    };
});
