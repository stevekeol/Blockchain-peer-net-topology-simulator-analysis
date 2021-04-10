import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import G6 from '@antv/g6';
import DATA from '../../Datas/CanvasTest';

export default function() {
  const ref = React.useRef(null);
  let graph = null;

  useEffect(() => {
    if(!graph) {
      graph = new G6.Graph({
        container: ReactDOM.findDOMNode(ref.current),
        width: 800,
        height: 700,
        modes: {
          default: ['drag-node'],
        },
        layout: {
          type: 'fruchterman',
          gravity: 5,
          speed: 5,
        },
        animate: false,
        defaultNode: {
          size: 30,
        },
      });
      graph.data(DATA);
      graph.render();
    }
  })


  if (typeof window !== 'undefined')
    window.onresize = () => {
      if (!graph || graph.get('destroyed')) return;
      if (!container || !container.scrollWidth || !container.scrollHeight) return;
      graph.changeSize(container.scrollWidth, container.scrollHeight);
    };

  function refreshDragedNodePosition(e) {
    const model = e.item.get('model');
    model.fx = e.x;
    model.fy = e.y;
  }

  return <div ref={ref}></div>
}