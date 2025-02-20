function updateTime() {
    const Time = new Date(); 
    const convert = Time.toLocaleString();
    document.getElementById("dateTime").innerHTML = convert;
}

setInterval(updateTime, 1000);

updateTime();