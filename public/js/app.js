'use strict';


// Declare app level module which depends on filters, and services
angular.module('Mega64', [
  'ngRoute',
  'ngAnimate',
  'Mega64.filters',
  'Mega64.services',
  'Mega64.directives',
  'Mega64.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/showlist.html', controller: 'ShowCtrl'});
  $routeProvider.when('/:show/', {templateUrl: 'partials/itemlist.html', controller: 'ShowCtrl'} );
  $routeProvider.when('/:show/:episode', {templateUrl: 'partials/itemview.html', controller: 'ShowCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
