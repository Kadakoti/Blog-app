'use strict';

// Declare app level module which depends on views, and core components
// angular.module('myApp', [
//   'ngRoute',
//   'myApp.view1',
//   'myApp.view2',
//   'blogList',
//   'blogDetail',
//   'myApp.version'
// ]).
// config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
//   $locationProvider.hashPrefix('!');

//   $routeProvider.otherwise({redirectTo: '/view1'});
// }]);

angular.module('myApp', [
  'ngRoute',
  'blogList',
  'blogDetail',
  'authors',
  'aboutus',
  'header'
]);



