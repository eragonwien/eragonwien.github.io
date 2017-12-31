var app = angular.module('eragonwien');

app.controller('maincontroller', ['$scope', 'mainservice', function (scope, mainservice) {
    // INIT VARIABLES
    scope.contactPressed = false;

    // ENABLE/ DIABLE CONTACT DIALOG
    scope.switchContact = function () {
        scope.contactPressed = !(scope.contactPressed);
    }
}]);