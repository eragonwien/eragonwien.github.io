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
angular
    .module('eragonwien')
    .factory('appService', appService);

appService.$inject = ['$http'];
function appService(http) {
    let service = {
        alert: alert,
        sendMail: sendMail
    };
    return service;

    /**
     * send an email by passing information per post on server
     * @param {object} params parameter contains sender and receiver information
     */
    function sendMail(params) {
        return http({
            method: 'POST',
            url: '/mailer',
            data: params
        }).then(success, error);

        function success(response) {
            return response;
        }

        function error(response) {
            return response;
        }
    }

    /**
     * alerts a message
     * @param {string} message text message
     */
    function alert(message) {
        if (message) {
            M.toast({html: message});
        }
    }
}
angular
    .module('eragonwien')
    .controller('mailController', mailController);

mailController.$inject = ['appService'];
function mailController(appService) {
    let vm = this;
    vm.sendMail = sendMail;
    vm.loading = false;
    /**
     * send email to the receiver
     * @param {object} receiver 
     */
    function sendMail(mail) {
        if (!mail || !mail.text) {
            appService.alert('Empty message cannot be sent.');
            return;
        }
        if (!mail.subject) {
            appService.alert('Mail subject is missing');
            return;
        }
        if (!mail.sender) {
            appService.alert('Please tell me who you are');
            return;
        }
        appService.alert('Sending...');
        let receiver = 'eragonwien@gmail.com'; // redirect email to dev instead
        let params = {
            sender: mail.sender,
            receiver: receiver, 
            subject: mail.subject,
            text: mail.text
        };
        vm.loading = true;
        appService.sendMail(params).then(sendMailHandler);

        function sendMailHandler(response) {
            vm.loading = false;
            if (response.status == 200) {
                return appService.alert('Email is sent.');
            }
            appService.alert('Error: ' + response.data);
        }
    }
}