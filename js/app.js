var app = angular.module('eragonwien', ['ngRoute']);

/* ROUTING */
app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        title: 'Start - Nguyen',
        templateUrl: 'overview.html',
        controller: 'maincontroller'
    })
    .when('/portfolio', {
        title: 'Portfolio - Nguyen',            
        templateUrl: 'portfolio.html',
        controller: 'maincontroller'
    })
    .when('/resume', {
        title: 'Resume - Nguyen',
        templateUrl: 'resume.html',
        controller: 'maincontroller'
    })
    .when('/portfolio/ng-house', {
        title: 'NG-HOUSE - Nguyen',
        templateUrl: 'projects/ng-house.html',
        controller: 'maincontroller'
    })
    .otherwise({
        redirectTo: '/',
        controller: 'maincontroller'
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
