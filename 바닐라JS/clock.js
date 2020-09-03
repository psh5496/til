window.onload=()=> {
const clock = document.querySelector('.h1-clock');

    function getTime() {
        let time = new Date();
        let hour = time.getHours();
        let minutes = time.getMinutes();
        
        if(hour < 10) {
            hour = "0" + hour;
        }
        if(minutes < 10) {
            minutes = "0" + minutes;
        }

        clock.innerHTML = hour + ":" + minutes;
    }
   
    function init() {
        getTime();
        setInterval(getTime, 1000);
    }

    init();
    min = Math.ceil(1);
    max = Math.floor(11);
    count=Math.floor(Math.random() * (max - min)) + min;    
    document.getElementById("main").style.backgroundImage="url( background"+count +".jfif )";
}