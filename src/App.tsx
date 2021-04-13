import React from 'react';
import PeersTopology from './Components/PeersTopology';
import PeerInfo from './Components/PeerInfo';
import Operation from './Components/Operation';
import './App.css';

export default function() {
  return(
    <div className="app">
      <div className="canvas">网络节点拓扑
        <PeersTopology />
      </div>
      <div className="data">
        <div className="info">节点实时状态详情
          <PeerInfo />
        </div>
        <div className="operation">操作面板
          <Operation />
        </div>
      </div>
    </div>
  )
}