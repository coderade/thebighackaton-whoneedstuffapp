/* global ionic, define */
define([
  'app',
  'services/data'
], function (app) {
  'use strict';

  app.controller('DonationCtrl', [
    '$scope',
    '$stateParams',
    'dataService',
    function ($scope, $stateParams, dataService) {
      var loggedUserUserName = $stateParams.username,
        users =  dataService.users;

      $scope.loggedUser =  _.find(users, {'username': loggedUserUserName});
    }
  ]);
});
