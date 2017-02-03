define([
  'app',
  'services/auth'
], function (app) {
  'use strict';

  app.controller('AuthCtrl', [
    '$scope',
    '$rootScope',
    'authService',
    '$state',
    function ($scope, $rootScope, authService, $state){
      $scope.search = {};
      $scope.login = function (user) {
        if(authService.validateUser(user)) {
          $rootScope.isAuthenticated = true;
          if(user.username === "ong"){
            $state.go('dashboard');
          }
          else if(user.username === "doador"){
            $state.go('profile', {username : user.username});
          }
        }
      };
    }
  ]);
});
