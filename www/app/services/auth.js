'use strict';

define([
  'app',
  'services/data'
], function (app) {
  app.service('authService', [
    'dataService',
    function (dataService) {
      this.validateUser =  function (userInput) {
        var users =  dataService.users;
        var notAuthenticated = true;
        angular.forEach(users, function(user) {
          if(notAuthenticated) {
            if(user.username === userInput.username){
              notAuthenticated = false;
            }
          }
        });
        return !notAuthenticated;
      }
    }]);
});
