const time = document.getElementById("time");
let [hour, minutes, second, milisecond] = [0, 0, 0, 0];
let timer = null

console.log(time.innerHTML);

time.addEventListener("click", (e) => {
    console.log(this.innerHTML)
})

function displayTime() {
    milisecond++;
    if (milisecond == 100) {
        milisecond = 0;
        second++;
        if (second == 60) {
            second = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hour++;
            }
        }
    }

    let h = hour < 10 ? `0${hour}` : hour;
    let m = minutes < 10 ? `0${minutes}` : minutes;
    let s = second < 10 ? `0${second}` : second;
    let ms = milisecond < 10 ? `0${milisecond}` : milisecond;

    time.innerHTML = `${h}  :  ${m}  :  ${s}  :  ${ms}`

}

function startTime() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(displayTime, 10);
}

function pause() {
    clearInterval(timer);
}
function reset() {
    clearInterval(timer);
    [hour, minutes, second, milisecond] = [0, 0, 0, 0];
    time.innerHTML = `00 : 00 : 00 : 00`
}