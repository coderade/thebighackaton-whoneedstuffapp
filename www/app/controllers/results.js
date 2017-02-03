define([
  'app',
  'services/oferta'
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
      $scope.limit = 10;
      $scope.show = {
        list: true
      };

      $scope.loadMore = function () {
        if (!first) {
          $timeout(function () {
            $scope.limit += 10;
            $scope.$broadcast('scroll.infiniteScrollComplete');
          }, 2000);
          return;
        }
        first = false;

        var search = $stateParams.search;

        if ( search !== $scope.search) {
          $scope.search = search;
          $scope.loading = true;
          ofertaService.search(search).then(function (ofertas) {
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
        ofertaService.search($scope.search).then(function (ofertas) {
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
          search: $scope.string
        });
      };
      $scope.goToList = function () {
        $ionicHistory.currentView($ionicHistory.backView());
        $ionicHistory.nextViewOptions({
          disableAnimate: true
        });
        $state.go('results.list', {
          search: $scope.search
        });
      };
    }
  ]);
});
