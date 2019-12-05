import React,  { useState, useEffect,useRef } from 'react';

// Thanks Konrad!!!!
// modified the code from https://stackoverflow.com/questions/57036237/how-to-get-updated-props-in-setinterval-by-using-react-hooks
function Timer(props) {
        const countdown = props.time;
        const [time, setTime] = React.useState();
        const timerRef = React.useRef(null);
      
        if (time <= 0) {
          clearInterval(timerRef.current);
        }
        function countDown(startFrom) {
        
          setTime(startFrom);
          timerRef.current = setInterval(() => {
            setTime((prevState) => prevState -1);
          }, 1000);
        }

    return(
        <div>
            {time === 0
                ?<h1>Times up!!</h1>
                :<h1>Time:{time}</h1>
            }
            {/* <div>Time:{time}</div> */}
            <button onClick={()=>countDown(countdown)}> Click here to start</button>
            {/* {time === 0
                ? <h1>Time's up!</h1>
                : <h1>Time Remaining: {seconds < 10 ? `0${seconds}` : seconds}</h1>
            } */}
        </div>
    )
    
}



export default Timer



// modified the code from https://medium.com/better-programming/building-a-simple-countdown-timer-with-react-4ca32763dda7
    //previous version of timer
    // const [seconds, setSeconds] = useState(100);
    // const timerRef = useRef(null);

    //countdown

    // const handleStart = (e) => {
    //     const myInterval = useInterval(() => {            
    //         let currentSeconds = seconds;
    //         console.log(currentSeconds)
    //         if (seconds > 0) {
    //             setSeconds(currentSeconds-1)
    //         }
    //         if (seconds === 0) {
    //                 clearInterval(myInterval)
    //         } 
    //     }, 1000)
    // }
