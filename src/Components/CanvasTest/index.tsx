import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import G6 from '@antv/g6';
import DATA from '../../Datas/CanvasTest';
// import generateNode from '../../Libs/generateNode'
import scaleAnimetion from '../../Libs/scaleAnimetion';

export default function() {
  const ref = React.useRef(null);
  let graph = null;

  // 为活跃节点配置缩放动效
  scaleAnimetion();
  useEffect(() => {
    if(!graph) {
      graph = new G6.Graph({
        container: ReactDOM.findDOMNode(ref.current) || '',
        width: 1200,
        height: 1000,
        modes: {
          default: ['drag-node', 'click-select'],
        },
        layout: {
          type: 'fruchterman',
          gravity: 5,
          speed: 5,
        },
        animate: true,
        defaultNode: {
          size: 60,
        },
      });

      graph.data(DATA);
      graph.render();
    }
  })

  return <div ref={ref}></div>
}