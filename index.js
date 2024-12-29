let hours = document.getElementById("hours"),
    minutes = document.getElementById("minutes"),
    seconds = document.getElementById("seconds")

function formatTime (unit) {
    return unit < 10 ? '0' + unit : unit;
}

function recieveDate () {
    let now = new Date();
    hours.innerText = formatTime(now.getHours());
    minutes.innerText = formatTime(now.getMinutes());
    seconds.innerText = formatTime(now.getSeconds());
}
setInterval(recieveDate, 1000);


let day = document.getElementById("day"),
    month = document.getElementById("month"),
    year = document.getElementById("year")

function getDate () { 
    let dMy = new Date();

    day.innerHTML = `День: ${dMy.getDate()}`;
    month.innerHTML = `Місяць: ${dMy.getMonth() + 1}`;
    year.innerHTML = `Рік: ${dMy.getFullYear()}`;
}

getDate();