'use strict';

angular.module('AudioPlayerApp.player', [])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/player', {
    templateUrl: 'player/player.html',
    controller: 'PlayerCtrl'
  });
}])

.controller('PlayerCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.audio = {
        src: null,
        controls: true,
        loop: true,
        autoplay: true
    };


  $http.get("https://freemusicarchive.org/api/get/tracks.json?api_key=LIQ7L2HUBLCO1U7S")
      .then(function(response) {
        $scope.songs_list = response.data.dataset;
          console.log($scope.songs_list);
      });

}]);