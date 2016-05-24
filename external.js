var myVar = setInterval(myTimer, 1000);
function myTimer() {
    var d = new Date();
    console.log(d.toLocaleTimeString());
}
