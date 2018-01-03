var app = angular.module('eragonwien');

app.controller('navbarcontroller', navbarcontroller);

function navbarcontroller() {
    console.log("NAV");
    var self = this;
    self.contactPressed = false;
    self.contact = {};
    self.switchContact = switchContact;
    
    // ENABLE/ DIABLE CONTACT DIALOG
    function switchContact() {
        console.log("SW");
        self.contactPressed = !(self.contactPressed);
        if (!self.contactPressed) {
            self.contact = {};
        }
    };;
}