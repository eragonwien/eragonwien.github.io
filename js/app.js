var app = angular.module('eragonwien', ['ngRoute','ngAnimate']);

/* ROUTING 
app.config(function($routeProvider, $locationProvider){
    $routeProvider
    .when('/', {
        title: 'Home - Nguyen',
        templateUrl: 'home.html',
        controller: 'homecontroller',
        controllerAs: 'home'
    })
    .when('/portfolio', {
        title: 'Portfolio - Nguyen',            
        templateUrl: 'portfolio.html',
        controller: 'maincontroller',
        controllerAs: 'main'
    })
    .when('/resume', {
        title: 'Resume - Nguyen',
        templateUrl: 'resume.html',
        controller: 'maincontroller',
        controllerAs: 'main'
    })
    .when('/contact', {
        title: 'Contact - Nguyen',
        templateUrl: 'contact.html',
        controller: 'contactcontroller',
        controllerAs: 'cc'
    })
    .when('/portfolio/ng-house', {
        title: 'NG-HOUSE - Nguyen',
        templateUrl: 'projects/ng-house.html',
        controller: 'maincontroller',
        controllerAs: 'main'
    })
    .otherwise({
        redirectTo: '/',
        controller: 'maincontroller',
        controllerAs: 'main'
    });
    $locationProvider.html5Mode(true);
});

/* CHANGE TITLE BASED ON ROUTE 
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

*/