'use strict';

// Declare app level module which depends on views, and components
angular.module('AudioPlayerApp', [
  'ngRoute',
  'AudioPlayerApp.player'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/player'});
}]);
