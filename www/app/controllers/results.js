define([
  'app',
  '' +
  'services/oferta',
  'directives/googleMaps'
], function (app) {
  'use strict';

  app.controller('ResultsCtrl', [
    '$scope',
    '$stateParams',
    '$state',
    '$timeout',
    '$ionicHistory',
    'ofertaService',
    function ($scope, $stateParams, $state, $timeout, $ionicHistory, ofertaService) {
      var first = true;
	  // $scope.apiKey = 'YOUR_API_KEY_HERE';
      $scope.limit = 10;
      $scope.show = {
        list: true
      };

      // show next 10
      $scope.loadMore = function () {
        if (!first) {
          $timeout(function () {
            $scope.limit += 10;
            $scope.$broadcast('scroll.infiniteScrollComplete');
          }, 2000);
          return;
        }
        first = false;

        var wheelChair = $stateParams.wheelChair === 'true',
            wheelChairLift = $stateParams.wheelChairLift === 'true',
            search = $stateParams.search;

        if (wheelChair !== $scope.wheelChair || wheelChairLift !== $scope.wheelChairLift || search !== $scope.search) {
          $scope.wheelChair = wheelChair;
          $scope.wheelChairLift = wheelChairLift;
          $scope.search = search;
          $scope.loading = true;
          ofertaService.search(search, wheelChair, wheelChairLift).then(function (ofertas) {
            $scope.limit = 10;
            $scope.ofertas = ofertas;
          }).finally(function () {
            $scope.loading = false;
            $scope.$broadcast('scroll.infiniteScrollComplete');
          });
        } else {
          $scope.$broadcast('scroll.infiniteScrollComplete');
        }
      };

      $scope.reload = function () {
        $scope.loading = true;
        ofertaService.search($scope.search, $scope.wheelChair, $scope.wheelChairLift).then(function (ofertas) {
          $scope.limit = 10;
          $scope.ofertas = ofertas;
        }).finally(function () {
          $scope.loading = false;
          $scope.$broadcast('scroll.refreshComplete');
        });
      };

      $scope.goToMap = function () {
        $ionicHistory.currentView($ionicHistory.backView());
        $ionicHistory.nextViewOptions({
          disableAnimate: true
        });
        $state.go('results.map', {
          search: $scope.string,
          wheelChair: $scope.wheelChair,
          wheelChairLift: $scope.wheelChairLift
        });
      };
      $scope.goToList = function () {
        $ionicHistory.currentView($ionicHistory.backView());
        $ionicHistory.nextViewOptions({
          disableAnimate: true
        });
        $state.go('results.list', {
          search: $scope.search,
          wheelChair: $scope.wheelChair,
          wheelChairLift: $scope.wheelChairLift
        });
      };
    }
  ]);
});
