angular
    .module('eragonwien')
    .service('mainservice', ['$timeout', function (timeout) {
        this.text = function () {
            timeout(function () {
                console.log("HELLO");
            }, 500);
        }
    }]);