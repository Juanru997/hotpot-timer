import React, { Component }  from 'react';
// import  { useState } from 'react';


// modified the code from https://medium.com/better-programming/building-a-simple-countdown-timer-with-react-4ca32763dda7
export default class Timer extends Component {
    //countdown
    state = {
        minutes: 0,
        seconds: 5,
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state
            

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            } 
        }, 1000)
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
    render() {
        const { minutes, seconds } = this.state
        // const  [reset, setReset] = useState(0);
        return (
            <div>
                { minutes === 0 && seconds === 0
                    // ? <button onClick={() => setReset(reset +1)}> Click here to reset</button>
                    ? <h1>Time's up!</h1>
                    : <h1>Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
                }
            </div>
        )
    }
}
