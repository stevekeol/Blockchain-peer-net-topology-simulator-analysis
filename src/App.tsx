import React, { useState } from 'react';
import './App.css';
import PeersTopology from './Components/PeersTopology';
// import PeerInfo from './Components/PeerInfo';
// import Operation from './Components/Operation';

export default function() {
  return(
    <div className="app App-header">
      <div className="canvas">网络节点拓扑
        <PeersTopology />
      </div>
      <div className="data">
        <div className="info">节点实时状态详情
        </div>
        <div className="operation">操作面板
        </div>
      </div>
    </div>
  )
}

/*-----------------------------*/
    // <div className="app">
    //   <div className="item canvas">0</div>
    //   <div className="item data">
    //     <div className="info">1</div>
    //     <div className="operation">2</div>
    //   </div>
    // </div>
  // return(
  //   <div className="App-header min-h-screen flex flex-col items-center justify-center text-white">
  //     <div className="title">节点网络拓扑图 - Simulator / Analyzer</div>
  //     <div><CanvasTest /></div>
  //   </div>
  // )