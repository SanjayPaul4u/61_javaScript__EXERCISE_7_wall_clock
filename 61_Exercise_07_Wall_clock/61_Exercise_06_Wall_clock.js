console.log("This is exercise 06");
//WALL CLOCK

let time = document.getElementById("time");

function showTime() {
    setInterval(() => {
        let date = new Date();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();

        second = (second<10? "0": "")+second;
        minute = (minute<10? "0": "")+minute;
        hour = (hour<10? "0": "")+hour;

        if(hour>12){
            let updateHour = hour-12;
            updateHour = (updateHour<10? "0": "")+updateHour;
            updateHour = (updateHour===0)? 12: updateHour;
            

            time.innerHTML = `<h4>${updateHour}: ${minute}: ${second} PM</h4>`
        }
        else{
            time.innerHTML = `<h4>${hour}: ${minute}: ${second} AM</h4>`
        }

       
    }, 1000);

}
showTime();

//PROBLEM 1>: ONLY 2 OR 3 COMING NOT 03 OR 02 COMING ==solved