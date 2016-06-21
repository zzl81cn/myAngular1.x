'use strict';

/**
 * @ngdoc overview
 * @name angularBsApp
 * @description
 * # angularBsApp
 *
 * Main module of the application.
 */
angular
  .module('angularBsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.bootstrap',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'mgcrea.ngStrap',
    'ngDraggable',
    'ng-mfb'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/root/main');
    $stateProvider
      .state('root', {
        url: '/root',
        // templateUrl: 'views/main.html',
        // controller: 'MainCtrl'
        views: {
          'head': {
            templateUrl: 'views/head.html',
            controller: 'primaryCtrl'
          },
          '': {
            templateUrl: 'views/root.html',
            // controller: 'MainCtrl'
          }
        }
      })
      .state('root.main', {
        url: '/main',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('root.about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .state('root.about.target', {
        url: '/target',
        templateUrl: 'views/test.html',
      })
      .state('root.about.profile', {
        url: '/profiles',
        templateUrl: 'views/test.html'
      })
      .state('root.about.messages', {
        url: '/messages',
        templateUrl: 'views/test.html'
      })
      .state('root.skynet', {
        url: '/skynet',
        templateUrl: 'views/skynet.html',
        controller: 'skynetCtrl'
      })
      .state('root.dirc', {
        url: '/dirc',
        templateUrl: 'views/dirc.html',
        controller: 'DirCtrl'
      })
      .state('root.contact', {
        url: '/contact',
        templateUrl: 'views/contact.html',
        controller: 'contactCtrl'
      });
  });
