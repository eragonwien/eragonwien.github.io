angular
    .module('eragonwien')
    .factory('mainservice', mainservice);

function mainservice() {
    var self = {};
    self.texts = [
        "responsive website.",
        "mobile-friendly UX.",
        "web application."
    ]

    return self;
    
}