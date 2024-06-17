function change() {
    var bkg_ele = document.body;
    bkg_ele.classList.toggle("body-dark-mode");

    const head_ele = document.getElementById("head");
    head_ele.classList.toggle("head-dark-mode");

    const ear_ele1 = document.getElementById("ear-1");
    ear_ele1.classList.toggle("ear-dark-mode");

    const ear_ele2 = document.getElementById("ear-2");
    ear_ele2.classList.toggle("ear-dark-mode");
  }

  // Calling showTime function at every second
setInterval(showTime, 1000);
 
// Defining showTime funcion
function showTime() {
    // Getting current time and date
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
 
    // Setting time for 12 Hrs format
    if (hour >= 12) {
        if (hour > 12) hour -= 12;
        am_pm = "PM";
    } else if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
 
    hour =
        hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
 
    let currentTime =
        hour +
        ":" +
        min +
        ":" +
        sec +
        am_pm;
 
    // Displaying the time
    document.getElementById(
        "clock"
    ).innerHTML = currentTime;
}
 
showTime();