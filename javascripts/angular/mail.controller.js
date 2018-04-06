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