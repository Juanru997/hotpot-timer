import React,  { useState, useEffect,useRef } from 'react';
import './App.css';

import {
  PopupboxManager,
  PopupboxContainer
} from 'react-popupbox';


// Thanks Konrad for helping !!!!
// modified the code from https://stackoverflow.com/questions/57036237/how-to-get-updated-props-in-setinterval-by-using-react-hooks
function Timer(props) {
        const foodName = props.name;
        const countdown = props.time;
        const [time, setTime] = React.useState();
        const timerRef = React.useRef(null);


      
        if (time <= 0) {
          clearInterval(timerRef.current);
          timerRef.current = null;
        }
        
        function countDown(startFrom) {
          if(timerRef.current){
            return
          }
          setTime(startFrom);
          timerRef.current = setInterval(() => {
            setTime((prevState) => prevState -1);
          }, 1000);
        }

        function setUnde(){
          setTime(undefined);
        }
        if (time <= 0) {
          return(
            <div>
              <div className="FontForInside">Times up!!</div>
          <button onClick={()=>setUnde()} className="buttonForDC">OK</button>
          </div>
          );
        }else if (time == undefined){  
          return(
          // <p>{foodName}</p>
          <button onClick={()=>countDown(countdown)} className="buttonForDC">{foodName}</button>
          );
        }else{
          return(
          <button onClick={()=>countDown(countdown)} className="buttonForDC"> {time}s </button>
          );
        }
}



export default Timer
