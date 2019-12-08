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


const meat2 = [
  {name:"五花肉",pic:"https://tshop.r10s.com/076/166/423a/5748/c059/3e75/e979/1158e89e1854ab3a295add.jpg?_ex=330x330",time:20},{name:"牛肉片",pic:"https://tshop.r10s.com/f5c/e36/7816/9670/8034/a10c/a3d6/11a6e78ed1c454448917cf.jpg",time:15},{name:"羊肉片",pic:"https://img.ruten.com.tw/s2/5/22/a4/21736068445860_497.jpg",time:15},{name:"毛肚",pic:"http://n.sinaimg.cn/front/111/w506h405/20190326/_89V-hutwezf5127602.jpg",time:15},{name:"鸭肠",pic:"https://pic.ihuoba.com/allimg/160829/54_160829175135_1.jpg",time:15},{name:"鸭血",pic:"https://m.360buyimg.com/pop/jfs/t23458/269/1771519900/305164/316b9d8f/5b696892N316c8a7e.png",time:600},{name:"鹌鹑蛋",pic:"http://cms-bucket.ws.126.net/8257201011ab4d41a98aeb26356a79f620170909153513.jpeg",time:60},{name:"黄喉",pic:"https://gss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/cf1b9d16fdfaaf518c34b24d875494eef11f7a68.jpg",time:150},
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
  
  {meat2.map(SingleFood)}
  
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
