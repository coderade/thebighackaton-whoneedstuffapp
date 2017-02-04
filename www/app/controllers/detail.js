/* global ionic, define */
define([
  'app',
  'services/oferta'
], function (app) {
  'use strict';

  app.controller('DetailCtrl', [
    '$scope',
    '$state',
    '$stateParams',
    '$window',
    '$ionicPopup',
    'ofertaService',
    function ($scope, $state, $stateParams, $window, $ionicPopup, ofertaService) {
      $scope.loading = true;
      ofertaService.getOne($stateParams.id).then(function (oferta) {
        $scope.oferta = oferta;
      }).finally(function () {
        $scope.loading = false;
      });

      $scope.reload = function () {
        ofertaService.getOne($stateParams.id).then(function (oferta) {
          $scope.oferta = oferta;
        }).finally(function () {
          $scope.$broadcast('scroll.refreshComplete');
        });
      };

      $scope.call = function () {
        // $window.open('tel:' + $scope.oferta.contact.tel, '_system');
      };

      $scope.mail = function () {
        // $window.open('mailto:' + $scope.oferta.contact.email, '_system');
      };

      $scope.website = function () {
        // $window.open($scope.oferta.website, '_system');
      };

      $scope.map = function () {
        $state.go('map');
      };

      $scope.report = function () {
        $ionicPopup.prompt({
          scope: $scope,
          title: '<span class="energized">Relate um bug</span>',
          subTitle: '<span class="stable">O quê você acha que está errado ou faltando?</span>',
          inputType: 'text',
          inputPlaceholder: ''
        }).then(function (res) {
          if (res) {
            // here connect to backend and send report
          }
        });
      };
    }
  ]);
});
