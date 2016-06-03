'use strict';

angular.module('vaultApp.auth', ['vaultApp.constants', 'vaultApp.util', 'ngCookies', 'ngRoute'])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
