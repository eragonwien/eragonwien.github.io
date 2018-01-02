var app = angular.module('eragonwien', ['ngRoute','ngAnimate']);

/* ROUTING */
app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        title: 'Home - Nguyen',
        templateUrl: 'overview.html',
        controller: 'homecontroller',
        controllerAs: 'ctrl'
    })
    .when('/portfolio', {
        title: 'Portfolio - Nguyen',            
        templateUrl: 'portfolio.html',
        controller: 'maincontroller',
        controllerAs: 'ctrl'
    })
    .when('/resume', {
        title: 'Resume - Nguyen',
        templateUrl: 'resume.html',
        controller: 'maincontroller',
        controllerAs: 'ctrl'
    })
    .when('/portfolio/ng-house', {
        title: 'NG-HOUSE - Nguyen',
        templateUrl: 'projects/ng-house.html',
        controller: 'maincontroller',
        controllerAs: 'ctrl'
    })
    .otherwise({
        redirectTo: '/',
        controller: 'maincontroller',
        controllerAs: 'ctrl'
    });
});

/* CHANGE TITLE BASED ON ROUTE */
app.run(['$rootScope', '$route', function($rootScope, $route) {
    $rootScope.$on('$routeChangeSuccess', function() {
        document.title = $route.current.title;
        scrollTop();
    });
}]);

function scrollTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
