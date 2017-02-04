define([
  'app',
  'services/oferta'
], function (app) {
  'use strict';

  app.controller('DashboardCtrl', [
    '$scope',
    '$state',
    'ofertaService',
    function ($scope, $state, ofertaService) {
      $scope.search = {};
      $scope.goToList = function () {
        $state.go('results', {
          search: $scope.search.string
        });
      };

      $scope.loadNext = function () {
        ofertaService.getNext().then(function (ofertas) {
          $scope.ofertas = ofertas;
        }).finally(function () {
          $scope.$broadcast('scroll.infiniteScrollComplete');
        });
      };
    }
  ]);
});
