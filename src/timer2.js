import React from 'react';
import './App.css';
import { expression } from '@babel/template';
import Timer from 'react-compound-timer';

function Timer2(){
    return(
<Timer
    initialTime={10000}
    direction="backward"
    startImmediately={false}
>
    {(start, resume, pause, stop, reset, timerState) => (
        <React.Fragment>
            <div>
            <Timer.Minutes /> minutes
            <Timer.Seconds /> seconds
            </div>

            <div>{timerState}</div>
            <br />
            <div>
                <button onClick={start}>Start</button>
                <button onClick={pause}>Pause</button>
                <button onClick={resume}>Resume</button>
                <button onClick={stop}>Stop</button>
                <button onClick={reset}>Reset</button>
            </div>


        </React.Fragment>
    )}
</Timer>
    );

}

export default Timer2;