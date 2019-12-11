import React from 'react';
import './App.css';
import Timer from './timer2.js';

// import 'bootstrap/dist/css/bootstrap.min.css';




const meat = [
  {name:"Pork Belly",pic:"https://tshop.r10s.com/076/166/423a/5748/c059/3e75/e979/1158e89e1854ab3a295add.jpg?_ex=330x330",time:20},{name:"Beef Jerky",pic:"https://tshop.r10s.com/f5c/e36/7816/9670/8034/a10c/a3d6/11a6e78ed1c454448917cf.jpg",time:15},{name:"Sliced Mutton",pic:"https://imgservice.suning.cn/uimg1/b2c/image/Q2fwmh94toJCPlH9fdV2fQ.jpg_800w_800h_4e",time:15},{name:"Tripes",pic:"http://n.sinaimg.cn/front/111/w506h405/20190326/_89V-hutwezf5127602.jpg",time:15},{name:"Duck Intestine",pic:"https://pic.ihuoba.com/allimg/160829/54_160829175135_1.jpg",time:15},{name:"Duck Blood Curd",pic:"https://m.360buyimg.com/pop/jfs/t23458/269/1771519900/305164/316b9d8f/5b696892N316c8a7e.png",time:600},{name:"Quail Eggs",pic:"http://cms-bucket.ws.126.net/8257201011ab4d41a98aeb26356a79f620170909153513.jpeg",time:60},{name:"Yellow Larynx Fillet",pic:"https://gss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/cf1b9d16fdfaaf518c34b24d875494eef11f7a68.jpg",time:150},
]

const bean_and_flour = [
  {name:"Tofu Skin",pic:"https://tshop.r10s.com/36a/e9d/5579/681d/50d1/6f62/806d/1101e8aab8c4544489145b.jpg",time:120},{name:"Fried Tofu Roll",pic:"https://img5.21food.cn/img/album/2017/10/12/food13600071041023L8.jpg",time:30},{name:"Old Tofu",pic:"https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/9f510fb30f2442a75b659357da43ad4bd01302dc.jpg",time:15},{name:"Konjac",pic:"https://www.zhifure.com/upload/images/2018/9/5175338214.jpg",time:15},{name:"Yuba",pic:"http://www.zsjiadu.com/data/upload/image/20171109/1510192048138759.jpg",time:15},{name:"Gluten bubble",pic:"http://m.ntcai.com/images/201811/goods_img/3398_P_1543457225299.jpg",time:600},
]

const vegetables=[
  {name:"Potato",pic:"http://images.meishij.net/p/20170330/5ff27eba123f27615b1c0f0c406a5c27_180x180.jpg",time:360},{name:"Seaweed",pic:"http://img.meishizuofa.com/caipu/2017032011/2hvkzithex22hvkzithex2.jpg",time:300},{name:"Baby Chinese Cabbage",pic:"http://cfcdn4.azsg.opensnap.com/azsg/snapphoto/photo/LD/GWDG/3C67RRE2F041B9B397F40Amx.jpg",time:60},{name:"Lotus",pic:"https://img14.360buyimg.com/n1/jfs/t1/983/20/6995/320524/5ba36914E2ac52da1/c4decb306f5be9b1.jpg",time:180},{name:"Sprouts",pic:"http://5b0988e595225.cdn.sohucs.com/images/20190719/9f5965331c78474a98dc18c91ec3863a.gif",time:180},{name:"Flammulina velutipes",pic:"http://cfcdn2.azsg.opensnap.com/azcn/snapphoto/photo/16F/XIML/6MCGQL057E2C64E78509E2mx.jpg",time:180},
]
function App() {
  return (
    <html>
    <head className="App-header">
      <h1 className="T">Hotpot Timer</h1>
      <h2 className="subT">Good Food is Worth the Wait</h2>
      <h2 className="subT">Click the Button on the Food's Pic</h2>
    </head>
  <body className="App">
       <nav className="navbar">
         <a href="#Meat" className="navWord">Meat</a>
         <a href="#Bean" className="navWord">Bean Flour</a>
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
