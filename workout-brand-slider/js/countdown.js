
var countDate = new Date("November 16, 9:33:00 2022").getTime();

function DealOfTheMonth(){
    var now = new Date().getTime();
    gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    d = Math.trunc(gap / day);
    h = Math.trunc((gap % day) / hour);
    m = Math.trunc((gap % hour) / minute);
    s = Math.trunc((gap % minute) / second);

    document.getElementById("day").innerHTML = d; 
    document.getElementById("hour").innerHTML = h;
    document.getElementById("minute").innerHTML = m;
    document.getElementById("second").innerHTML = s;
}

    setInterval(function(){
        DealOfTheMonth();
            },1000)
