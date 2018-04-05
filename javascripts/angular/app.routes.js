angular
    .module('eragonwien')
    .config(routing);

routing.$inject = ['$stateProvider', '$urlRouterProvider'];
function routing(stateProvider, urlRouterProvider) {
    let home = {
        name: 'home',
        url: '/',
        views: {
            main: {
                templateUrl: 'views/home.html'
            }
        }
    };
    let portfolio = {
        name: 'portfolio',
        url: '/portfolio',
        views: {
            header: {
                templateUrl: 'views/navbar.html'
            },
            main: {
                templateUrl: 'views/portfolio.html'
            },
            footer: {
                templateUrl: 'views/navbar.html'
            }
        }
    };
    let cv = {
        name: 'cv',
        url: '/cv',
        views: {
            header: {
                templateUrl: 'views/navbar.html'
            },
            main: {
                templateUrl: 'views/home.html'
            },
            footer: {
                templateUrl: 'views/navbar.html'
            }
        }
    };
    let project_meantodo = {
        name: 'meantodo',
        url: 'projects/meantodo',
        views: {
            header: {
                templateUrl: 'views/navbar.html'
            },
            main: {
                templateUrl: 'views/home.html'
            },
            footer: {
                templateUrl: 'views/navbar.html'
            }
        }
    };
    let project_nghouse = {
        name: 'nghouse',
        url: '/projects/nghouse',
        views: {
            header: {
                templateUrl: 'views/navbar.html'
            },
            main: {
                templateUrl: 'views/home.html'
            },
            footer: {
                templateUrl: 'views/navbar.html'
            }
        }
    };
    stateProvider.state(home);
    stateProvider.state(portfolio);
    stateProvider.state(cv);
    stateProvider.state(project_meantodo);
    stateProvider.state(project_nghouse);

    urlRouterProvider.otherwise('/');
}