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