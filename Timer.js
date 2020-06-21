function hide () {

    var pauseit = document.getElementById("time")
   

    alert("helooooo?")
    
    pauseit.style.display = "block"
    document.getElementById("herewego").style.display = "block"
}

var timer;

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

var inputtime = prompt("Please enter desired time in minutes:", "90");

window.onload = function () {
    var fiveMinutes = 60 * inputtime,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
    hide();
};





function pause () {

    clearTimeout(timer);

   

    var pauseit = document.querySelector('#time');
   

    pauseit.style.display = "block"
    

    


}
