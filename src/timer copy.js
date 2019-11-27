import React,  { useState, useEffect } from 'react';
// import  { useState } from 'react';


// modified the code from https://medium.com/better-programming/building-a-simple-countdown-timer-with-react-4ca32763dda7
function Timer() {
    const [seconds, setSeconds] = useState(100);

    //countdown
    if (seconds > 0) {
        setSeconds(seconds-1)
        setSeconds(({ seconds }) => ({
            seconds: seconds - 1
        }))
    }else {
        clearInterval(this.myInterval)
        } 

}




    componentWillUnmount() {
        clearInterval(this.myInterval);
    }


    //button
    // constructor(props) {
    //     super(props);
    //     this.state = {isToggleOn: true};

    //     // This binding is necessary to make `this` work in the callback
    //     this.handleClick = this.handleClick.bind(this);
    //   }

    //   handleClick() {
    //     this.setState(state => ({
    //       isToggleOn: !state.isToggleOn
    //     }));
    //   }

    return (




        render() {
        const { minutes, seconds } = this.state
        // const  [reset, setReset] = useState(0);
        return (
            <div>
                {minutes === 0 && seconds === 0
                    // ? <button onClick={() => setReset(reset +1)}> Click here to reset</button>
                    ? <h1>Time's up!</h1>
                    : <h1>Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                }
            </div>
        )
    }
    );
}



export default Timer