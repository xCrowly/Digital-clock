var headerText = document.getElementById('header-sec');
var curruntHour = document.getElementById('hours');
var curruntMinute = document.getElementById('minutes');
var curruntSecond = document.getElementById('seconds');
var curruntDay = document.getElementById('day');
var curruntDayNumber = document.getElementById('day-number');
var curruntMonth = document.getElementById('month');
var curruntYear = document.getElementById('year');
var days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday ', 'Friday']

function updateTime() {
    const d = new Date();
    curruntHour.innerHTML = d.getHours() + ":";
    curruntMinute.innerHTML = d.getMinutes() + ":";
    curruntSecond.innerHTML = d.getSeconds();
    curruntDayNumber.innerHTML = d.getDate();
    curruntDay.innerHTML = days[d.getDay()];
    curruntMonth.innerHTML = d.getMonth() + 1 + "/";
    curruntYear.innerHTML = d.getFullYear();
    window.setTimeout(() => {
        updateTime();
    }, 1000);
}
updateTime();

function changeHeaderColor() {
    var randomColor = Math.floor(Math.random() * 1000000);
    headerText.setAttribute('style', 'color: #' + randomColor + ";");
    window.setTimeout(() => {
        changeHeaderColor();
    }, 1000);
}

changeHeaderColor();

