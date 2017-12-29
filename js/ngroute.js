angular
    .module('eragonwien')
    .config(function($routeProvider){
        $routeProvider
        .when("/", {
            templateUrl: "overview.html"
        })
        .when("/portfolio", {
            templateUrl: "portfolio.html"
        })
        .when("/resume", {
            templateUrl: "resume.html"
        });
    });