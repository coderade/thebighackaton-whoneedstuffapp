define([
  'app',
  'services/auth'
], function (app) {
  'use strict';

  app.controller('AuthCtrl', [
    '$scope',
    '$state',
    'authService',
    function ($scope, $state, authService){
      $scope.search = {};
      $scope.login = function (user) {
        if(authService.validateUser(user)) {
          $scope.isAuthenticated = true;
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
