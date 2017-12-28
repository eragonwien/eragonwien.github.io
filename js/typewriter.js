var i = 0; // charAt position
var texts = ['beautiful and responsive UI.', 'mobile-friendly UX.', 'web application.'];
var speed = 70; // wait 50 miliseconds between character
var transition_speed = 1500; // wait 2 sec before erase the text
setTimeout(typeWriter, 250, texts, 0);
function typeWriter(arr, position) {
    if (position >= arr.length) {
        return;
    }
    var current = arr[position];
    if (i < current.length) {
        document.getElementById("textwriter").innerHTML += current.charAt(i);
        i++;
        setTimeout(typeWriter, speed, arr, position);
    }
    else {
        if (position == arr.length - 1) {
            return;
        }
        setTimeout(typeRemover, transition_speed, arr, position)
    }
}

function typeRemover(arr, position) {
    if (position >= arr.length) {
        return;
    }
    var current = arr[position];
    if (i >= 0) {
        document.getElementById("textwriter").innerHTML = current.slice(0, i);        
        i--;
        setTimeout(typeRemover, speed, arr, position);
    }
    else {
        setTimeout(typeWriter, speed, arr, ++position)
    }
}