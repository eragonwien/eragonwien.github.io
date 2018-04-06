angular.module('eragonwien', ['ui.router']);
angular
    .module('eragonwien')
    .config(routing);

routing.$inject = ['$stateProvider', '$urlRouterProvider'];
function routing(stateProvider, urlRouterProvider) {
    let home = {
        name: 'home',
        url: '/',
        views: {
            header: {
                templateUrl: 'views/navbar.html'
            },
            main: {
                templateUrl: 'views/home.html'
            },
            footer: {
                templateUrl: 'views/footer.html'
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
                templateUrl: 'views/footer.html'
            }
        }
    };
    let about = {
        name: 'about',
        url: '/about',
        views: {
            header: {
                templateUrl: 'views/navbar.html'
            },
            main: {
                templateUrl: 'views/about.html'
            },
            footer: {
                templateUrl: 'views/footer.html'
            }
        }
    };

    stateProvider.state(home);
    stateProvider.state(portfolio);
    stateProvider.state(about);

    urlRouterProvider.otherwise('/');
}