define([
  'app',
  // Load Controllers here
  'controllers/app',
  'controllers/dashboard',
  'controllers/results',
  'controllers/detail',
  'controllers/auth',
  'controllers/profile',
  'controllers/map'

], function (app) {
  'use strict';
  // definition of routes
  app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      // url routes/states
      $urlRouterProvider.otherwise('login');

      $stateProvider
        // app states
        .state('login', {
          url: '/login',
          templateUrl: 'app/templates/login.html',
          controller: 'AuthCtrl'
        })
        .state('profile', {
          url: '/profile/:username',
          templateUrl: 'app/templates/profile.html',
          controller: 'ProfileCtrl'
        })
        .state('donation', {
          url: '/donation',
          templateUrl: 'app/templates/donation.html',
          controller: 'DontationCtrl'
        })
        .state('map', {
          url: '/map',
          templateUrl: 'app/templates/map.html',
          controller: 'MapCtrl'
        })
        .state('dashboard', {
          url: '/dashboard',
          templateUrl: 'app/templates/dashboard.html',
          controller: 'DashboardCtrl'
        })
        .state('results', {
          url: '/results/:search',
          controller: 'ResultsCtrl',
          templateUrl: 'app/templates/results.html'
        })
        .state('detail', {
          url: '/detail/:id',
          controller: 'DetailCtrl',
          templateUrl: 'app/templates/detail.html'
        });
    }
  ]);
});
