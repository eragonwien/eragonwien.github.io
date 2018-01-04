var app = angular.module('eragonwien');

app.controller('contactcontroller', ['mainservice', contactcontroller]);

function contactcontroller(mainservice) {
    console.log("CONTACT");
    var self = this;

    self.contactPressed = false;
    self.contact = {};
    self.switchContact = switchContact;
    self.sendContact = function (contact) {
        console.log("send");
        console.log(self.contact);
    };


    // ENABLE/ DIABLE CONTACT DIALOG
    function switchContact() {
        console.log("SW");
        self.contactPressed = !(self.contactPressed);
        if (!self.contactPressed) {
            self.contact = {};
        }
    };;
}