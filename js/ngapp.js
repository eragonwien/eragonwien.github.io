var app = angular.module("eragonwien", ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        title: "Start - Nguyen",
        templateUrl: "overview.html"
    })
    .when("/portfolio", {
        title: "Portfolio - Nguyen",            
        templateUrl: "portfolio.html"
    })
    .when("/resume", {
        title: "Resume - Nguyen",
        templateUrl: "resume.html"
    })
    .when("/contact", {
        title: "contact - Nguyen",
        templateUrl: "contact.html"
    })
    .when("/portfolio/ng-house", {
        title: "NG-HOUSE - Nguyen",
        templateUrl: "projects/ng-house.html"
    })
    .otherwise({
        redirectTo: "/"
    });
});
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