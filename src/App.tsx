import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import G6 from '@antv/g6';
import './App.css';

import DATA from './Datas/CanvasTest';

import { PeerInfo, Operation } from './Components';
import { 
  nodeScaleAnimetion,
  showNearbyNodeAndEdge,
  edgeToolTips,
  nodeToolTips
} from './Libs';

export default function() {
  const ref = React.useRef(null);
  let graph: any = null;

  // 为活跃节点配置缩放动效
  nodeScaleAnimetion(); // 也可以插件形式，写入plugins
  // 为选中节点相邻边增加显示动效
  // edgeDottedAnimetion();

  useEffect(() => {
    if(!graph) {
      graph = new G6.Graph({
        container: ReactDOM.findDOMNode(ref.current) as HTMLElement,
        width: 1200,
        height: 1000,
        modes: {
          // default: ['drag-canvas', 'drag-node', 'click-select', 'zoom-canvas'],
          default: ['drag-node', 'click-select'],
          // default: ['drag-node'],
        },
        layout: {
          type: 'fruchterman',
          gravity: 4,
          speed: 5,
          workerEnabled: true, //使用worker线程分担渲染线程的压力
        },
        animate: true,
        defaultNode: {
          size: 60,
          style: {
            fill: '#3DE2DC',
            stroke: '#eee',  
          }          
        },
        defaultEdge: {
          style: {
            lineAppendWidth: 5,
            strokeOpacity: 0.5
          }
        },
        nodeStateStyles: {
          highlight: {
            opacity: 1,
          },
          dark: {
            opacity: 0.2,
          },
        },
        edgeStateStyles: {
          highlight: {
            stroke: '#999',
          },
        },        
        plugins: [nodeToolTips, edgeToolTips], // 自定义的功能插件
      });

      // showSelectedNodeInfo(graph);
      showNearbyNodeAndEdge(graph);

      graph.data(DATA);
      graph.render();
    }
  })

  return(
    <div className="app">
      <div className="canvas" ref={ref}>网络节点拓扑
      </div>
      <div className="data">
        <div className="info">
          <PeerInfo />
        </div>
        <div className="operation">
          <Operation />
        </div>
      </div>
    </div>    
  )
}