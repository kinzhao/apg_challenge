'use strict';

angular.module('vaultApp', ['vaultApp.auth', 'vaultApp.admin', 'vaultApp.constants', 'ngCookies',
    'ngResource', 'ngSanitize', 'ngRoute', 'btford.socket-io', 'ui.bootstrap', 'validation.match'
  ])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider.otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
  });
