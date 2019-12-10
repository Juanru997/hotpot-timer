import React from 'react';
import './App.css';
import Timer from './timer2.js';

// import 'bootstrap/dist/css/bootstrap.min.css';




const meat = [
  {name:"五花肉",pic:"https://tshop.r10s.com/076/166/423a/5748/c059/3e75/e979/1158e89e1854ab3a295add.jpg?_ex=330x330",time:20},{name:"牛肉片",pic:"https://tshop.r10s.com/f5c/e36/7816/9670/8034/a10c/a3d6/11a6e78ed1c454448917cf.jpg",time:15},{name:"羊肉片",pic:"https://img.ruten.com.tw/s2/5/22/a4/21736068445860_497.jpg",time:15},{name:"毛肚",pic:"http://n.sinaimg.cn/front/111/w506h405/20190326/_89V-hutwezf5127602.jpg",time:15},{name:"鸭肠",pic:"https://pic.ihuoba.com/allimg/160829/54_160829175135_1.jpg",time:15},{name:"鸭血",pic:"https://m.360buyimg.com/pop/jfs/t23458/269/1771519900/305164/316b9d8f/5b696892N316c8a7e.png",time:600},{name:"鹌鹑蛋",pic:"http://cms-bucket.ws.126.net/8257201011ab4d41a98aeb26356a79f620170909153513.jpeg",time:60},{name:"黄喉",pic:"https://gss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/cf1b9d16fdfaaf518c34b24d875494eef11f7a68.jpg",time:150},
]

const bean_and_flour = [
  {name:"豆皮",pic:"https://tshop.r10s.com/36a/e9d/5579/681d/50d1/6f62/806d/1101e8aab8c4544489145b.jpg",time:120},{name:"炸豆衣卷",pic:"https://img5.21food.cn/img/album/2017/10/12/food13600071041023L8.jpg",time:30},{name:"老豆腐",pic:"https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/9f510fb30f2442a75b659357da43ad4bd01302dc.jpg",time:15},{name:"魔芋丝",pic:"https://www.zhifure.com/upload/images/2018/9/5175338214.jpg",time:15},{name:"腐竹",pic:"http://www.zsjiadu.com/data/upload/image/20171109/1510192048138759.jpg",time:15},{name:"面筋泡",pic:"http://m.ntcai.com/images/201811/goods_img/3398_P_1543457225299.jpg",time:600},
]

const vegetables=[
  {name:"土豆",pic:"http://images.meishij.net/p/20170330/5ff27eba123f27615b1c0f0c406a5c27_180x180.jpg",time:360},{name:"海带",pic:"http://img.meishizuofa.com/caipu/2017032011/2hvkzithex22hvkzithex2.jpg",time:300},{name:"娃娃菜",pic:"http://cfcdn4.azsg.opensnap.com/azsg/snapphoto/photo/LD/GWDG/3C67RRE2F041B9B397F40Amx.jpg",time:60},{name:"藕片",pic:"https://img14.360buyimg.com/n1/jfs/t1/983/20/6995/320524/5ba36914E2ac52da1/c4decb306f5be9b1.jpg",time:180},{name:"豆芽",pic:"http://5b0988e595225.cdn.sohucs.com/images/20190719/9f5965331c78474a98dc18c91ec3863a.gif",time:180},{name:"金针菇",pic:"http://cfcdn2.azsg.opensnap.com/azcn/snapphoto/photo/16F/XIML/6MCGQL057E2C64E78509E2mx.jpg",time:180},
]
function App() {
  return (
    <html>
    <head className="App-header">
      <h1>Hotpot Timer</h1>
    </head>
  <body className="App">
       <nav className="navbar">
         <a href="#Meat" className="navWord">Meat</a>
         <a href="#Bean" className="navWord">Bean and Flour</a>
         <a href="#Veg" className="navWord">Veg</a>
       </nav>
    <Meat/>
    <Bean/>
    <Veg/>
    
  </body>
  </html>
   
  );
}

function Meat(){
  return(
    <div id="Meat">
    <div className="cate">
    <h1 className="cateWord">Meat</h1>
    </div>
  <div className="Flex4Food">
    {/* <h1>Meat</h1> */}
    {meat.map(SingleFood)}
  </div>
  </div>
  );
}

function Bean(){
  return(
    <div id="Bean">
       <div className="cate">
    <h1 className="cateWord">Bean and Flour</h1>
    </div>
    <div className="Flex4Food">
  {bean_and_flour.map(SingleFood)}
  </div>
    </div>
  );
}


function Veg(){
  return(
    <div id="Veg">
       <div className="cate">
    <h1 className="cateWord">Vegetables</h1>
    </div>
    <div className="Flex4Food">
  {vegetables.map(SingleFood)}
  </div>
    </div>
  );
}

function SingleFood(props){
  return(
    <div className="FoodCon">
    <img className="ImgBl" src={props.pic} width="150wh" height="150wh" />
    {/* <div className="centered">
      <div className="FoodName">
      <p>{props.name}</p>
      </div>
    </div> */}
    <div className="centered"><Timer name={props.name} time={props.time}/> </div>
    {/* <div className="bottom-right">{props.time}s </div> */}
    {/* <Timer time={props.time}/> */}
  </div>
  );
}



export default App;
