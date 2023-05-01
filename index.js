const clock = document.querySelector(".clock");

let second = 0, 
    minute = 0, 
    hour = 0,
    intervalId;

const startStopwatch = () => {

    intervalId = setInterval(() => {       
        
        if(second < 59){
            second++;
        }else if(minute >= 59){     
            hour++;
            minute = 0;
        } else {
            second = 0;
            minute++;
        }

        // const seconds = String(second).padStart(2, "0");
        // const minutes = String(minute).padStart(2, "0");
        // const hours = String(hour).padStart(2, "0");


        const seconds = second.toString().padStart(2, "0");
        const minutes = minute.toString().padStart(2, "0");
        const hours = hour.toString().padStart(2, "0");
        
        // console.log(`${hours}:${minutes}:${seconds}`);

        clock.innerText = `${hours}:${minutes}:${seconds}`;

    }, 1000);

};


const stopStopwatch = () => {
    clearInterval(intervalId);
};








