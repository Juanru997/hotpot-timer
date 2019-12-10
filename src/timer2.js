import React,  { useState, useEffect,useRef } from 'react';
import './App.css';

import {
  PopupboxManager,
  PopupboxContainer
} from 'react-popupbox';


// Thanks Konrad!!!!
// modified the code from https://stackoverflow.com/questions/57036237/how-to-get-updated-props-in-setinterval-by-using-react-hooks
function Timer(props) {
        const foodName = props.name;
        const countdown = props.time;
        const [time, setTime] = React.useState();
        const timerRef = React.useRef(null);

        // console.log(foodName);
      
        if (time <= 0) {
          console.log("!");
          openPopupbox();
          clearInterval(timerRef.current);
        }
        
        function countDown(startFrom) {
          setTime(startFrom);
          timerRef.current = setInterval(() => {
            setTime((prevState) => prevState -1);
          }, 1000);
        }


        //popupbox
        function openPopupbox() {
          const content = (
            <div>
              <p className="quotes">Times up!</p>
              {/* <span className="quotes-from">― Mark Twain</span> */}
            </div>
          )
          PopupboxManager.open({ content })
        }

    return(
        <div>
  
          {time === 0 
                ?<div className="FontForInside">Times up!!</div>
                :<div className="FontForInside"><div className="NameTime">{foodName}</div></div>
            }
            {/* <div>Time:{time}</div> */}
          {/* <div className="FoodName">{foodName}</div> */}
          <button onClick={()=>countDown(countdown)} className="buttonForDC"> {time}s
          {/* <button onClick={()=>countDown(countdown)} className="buttonForDC"> {time}s */}

          {/* {time === 0
          ?<div>{time}s</div>
          !<p>start again</p>} */}
          </button>
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
