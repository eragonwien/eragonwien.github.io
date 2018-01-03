var app = angular.module('eragonwien');

app.controller('homecontroller', ['mainservice', '$timeout', homecontroller]);

function homecontroller(mainservice, timeout) {
    console.log("HOME");
    var self = this;
    // TYPEWRITER EFFECT
    self.text = "";
    var texts = mainservice.texts;
    var speed = 50;
    var counter = 0;
    var delay = 2000;
    var clear = false;
    var timer = function () {
        var text = texts[counter];
        if (clear) {
            // erase text
            if (self.text.length > 0) {
                self.text = self.text.substring(0, self.text.length - 1);
            }
            else {
                clear = false;
            }
            timeout(timer, speed);
        }
        else if (counter >= texts.length) {
            // extra delay after complete whole array
            counter = 0;
            clear = true;
            timeout(timer, delay);
        } 
        else if (self.text.length < text.length) {
            // adding text
            self.text += text.charAt(self.text.length);
            timeout(timer, speed);              
        }
        else {
            // delay between text
            counter++;
            clear = true;
            timeout(timer, delay);
        }
    };

    timeout(timer, speed);
    
}

/*
app.controller('homecontroller', ['$scope', 'mainservice', '$timeout',function (scope, mainservice, timeout) {
    console.log("HOME");

    scope.textwriter = "";
    var text = "web application.";
    var speed = 50;
    var timer = function () {
        if (scope.textwriter.length < text.length) {
            scope.textwriter += text.charAt(scope.textwriter.length);
            timeout(timer, speed);
        }
        
    };

    timeout(timer, speed);
}]);*/