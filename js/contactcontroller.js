var app = angular.module('eragonwien');

app.controller('contactcontroller', ['mainservice', contactcontroller]);

function contactcontroller(mainservice) {
    console.log("CONTACT");
    var self = this;

    self.submiting = true;
    self.success = false;
    self.contact = {};
    self.close = close;
    self.sendContact = sendContact;
    
    function sendContact(contact) {
        console.log(self.contact);
        if (self.contact) {
            self.submiting = false;
            self.success = true;
        }
    }

    function close() {
        self.submiting = true;
        self.success = false;
    }
}