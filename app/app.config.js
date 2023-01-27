'use strict';



angular.
    module('myApp').
    config(['$routeProvider',
        function config($routeProvider) {
            $routeProvider
                .when('/blog', {
                    template: '<blog-List></blog-List>'
                })
                .when('/blog/authors', {
                    template: '<authors></authors>'
                })
                .when('/blog/aboutus', {
                    template: '<aboutus></aboutus>'
                })
                .when('/blog/:id', {
                    template: '<blog-Detail></blog-Detail>'
                })
                .otherwise('/blog')
        }

    ])