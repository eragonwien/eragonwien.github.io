var app = angular.module('eragonwien');

app.controller('homecontroller', ['$scope', 'mainservice', '$timeout',function (scope, mainservice, timeout) {
    // INIT VARIABLES
    scope.contactPressed = false;
    scope.contact = {};

    // ENABLE/ DIABLE CONTACT DIALOG
    scope.switchContact = function () {
        scope.contactPressed = !(scope.contactPressed);
        if (!scope.contactPressed) {
            scope.contact = {};
        }
    };    

    scope.textwriter = "";
    var text = "web application";
    var speed = 50;
    var timer = function () {
        if (scope.textwriter.length < text.length) {
            scope.textwriter += text.charAt(scope.textwriter.length);
            timeout(timer, speed);
        }
        
    };

    timeout(timer, speed);
}]);