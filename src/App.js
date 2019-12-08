import React from 'react';
import './App.css';
import Timer from './timer2.js';

const meat = [
{name: "wuhuarou1", pic:"https://macaulifestyle.com/wp-content/uploads/2017/12/Banyan-Tree-Hotpot-1024x683.jpg", time:10},
{name: "wuhuarou2", pic:"https://macaulifestyle.com/wp-content/uploads/2017/12/Banyan-Tree-Hotpot-1024x683.jpg", time:20},
{name: "wuhuarou3", pic:"https://macaulifestyle.com/wp-content/uploads/2017/12/Banyan-Tree-Hotpot-1024x683.jpg", time:30},
{name: "wuhuarou4", pic:"https://macaulifestyle.com/wp-content/uploads/2017/12/Banyan-Tree-Hotpot-1024x683.jpg", time:40},
{name: "wuhuarou1", pic:"https://macaulifestyle.com/wp-content/uploads/2017/12/Banyan-Tree-Hotpot-1024x683.jpg", time:10},
{name: "wuhuarou2", pic:"https://macaulifestyle.com/wp-content/uploads/2017/12/Banyan-Tree-Hotpot-1024x683.jpg", time:20},
{name: "wuhuarou3", pic:"https://macaulifestyle.com/wp-content/uploads/2017/12/Banyan-Tree-Hotpot-1024x683.jpg", time:30},
{name: "wuhuarou4", pic:"https://macaulifestyle.com/wp-content/uploads/2017/12/Banyan-Tree-Hotpot-1024x683.jpg", time:40},
{name: "wuhuarou1", pic:"https://macaulifestyle.com/wp-content/uploads/2017/12/Banyan-Tree-Hotpot-1024x683.jpg", time:10},
{name: "wuhuarou2", pic:"https://macaulifestyle.com/wp-content/uploads/2017/12/Banyan-Tree-Hotpot-1024x683.jpg", time:20},
{name: "wuhuarou3", pic:"https://macaulifestyle.com/wp-content/uploads/2017/12/Banyan-Tree-Hotpot-1024x683.jpg", time:30},
{name: "wuhuarou4", pic:"https://macaulifestyle.com/wp-content/uploads/2017/12/Banyan-Tree-Hotpot-1024x683.jpg", time:40},
{name: "wuhuarou1", pic:"https://macaulifestyle.com/wp-content/uploads/2017/12/Banyan-Tree-Hotpot-1024x683.jpg", time:10},
{name: "wuhuarou2", pic:"https://macaulifestyle.com/wp-content/uploads/2017/12/Banyan-Tree-Hotpot-1024x683.jpg", time:20},
{name: "wuhuarou3", pic:"https://macaulifestyle.com/wp-content/uploads/2017/12/Banyan-Tree-Hotpot-1024x683.jpg", time:30},

]

function App() {
  return (
    <div className="App">
    
   <Food />
   {/* <Timer cookTime={meat} /> */}
   {/* <Timer time={3}/> */}
    </div>
  );
}

function Food(){
  return(
  <div className="Flex4Food">
  
  {meat.map(SingleFood)}
  
  </div>
  );
}

function SingleFood(props){
  return(
    <div className="FoodCon">
    <img src={props.pic} width="100wh" height="100wh" />
    <div className="centered"><Timer time={props.time}/> </div>
    <div className="bottom-right">{props.time}s </div>
    {/* <Timer time={props.time}/> */}
  </div>
  );
}



export default App;
