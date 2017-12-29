var timer = startWriting();

function startWriting() {
    var i = 0; // charAt position
    var texts = ['beautiful and responsive UI.', 'mobile-friendly UX.', 'web application.'];
    var speed = 50; // wait 50 miliseconds between character
    var transition_speed = 1000; // wait 2 sec before erase the text
    
    timer = setTimeout(typeWriter, 0, texts, 0);
    return timer;

    function typeWriter(arr, position) {
        if (position >= arr.length) {
            return;
        }
        var current = arr[position];
        if (i < current.length) {
            document.getElementById("textwriter").innerHTML += current.charAt(i);
            i++;
            timer = setTimeout(typeWriter, speed, arr, position);
        }
        else {
            if (position == arr.length - 1) {
                return;
            }
            timer = setTimeout(typeRemover, transition_speed, arr, position)
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
            timer = setTimeout(typeRemover, speed, arr, position);
        }
        else {
            timer = setTimeout(typeWriter, speed, arr, ++position)
        }
    }   
}

function stopWriting() {
    clearTimeout(timer);
}


