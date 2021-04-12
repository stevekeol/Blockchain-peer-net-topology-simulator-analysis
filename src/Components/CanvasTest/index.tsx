import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import G6 from '@antv/g6';
import './index.css';
import DATA from '../../Datas/CanvasTest';
import nodeScaleAnimetion from '../../Libs/nodeScaleAnimetion';
import edgeDottedAnimetion from '../../Libs/edgeDottedAnimetion';
import nodeToolTips from '../../Libs/nodeToolTips';
import edgeToolTips from '../../Libs/edgeToolTips';
// import generateNode from '../../Libs/generateNode'

export default function() {
  const ref = React.useRef(null);
  let graph = null;

  // 为活跃节点配置缩放动效
  nodeScaleAnimetion(); // 也可以插件形式，写入plugins
  // 为选中节点相邻边增加显示动效
  // edgeDottedAnimetion();

const lineDash = [4, 2, 1, 2];
G6.registerEdge(
  'can-running',
  {
    setState(name, value, item) {
      const shape = item.get('keyShape');
      if (name === 'running') {
        if (value) {
          let index = 0;
          shape.animate(
            () => {
              index++;
              if (index > 9) {
                index = 0;
              }
              const res = {
                lineDash,
                lineDashOffset: -index,
              };
              // return the params for this frame
              return res;
            },
            {
              repeat: true,
              duration: 3000,
            },
          );
        } else {
          shape.stopAnimate();
          shape.attr('lineDash', null);
        }
      }
    },
  },
  'cubic-horizontal',
);

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
          style: {
            fill: '#3DE2DC',
            stroke: '#eee',  
          }          
        },
        plugins: [nodeToolTips, edgeToolTips],
      });

  // 监听节点的 mouseenter 事件
  graph.on('node:mouseenter', (ev) => {
    console.log('enter mou')
    // 获得当前鼠标操作的目标节点
    const node = ev.item;
    // 获得目标节点的所有相关边
    const edges = node.getEdges();
    // 将所有相关边的 running 状态置为 true，此时将会触发自定义节点的 setState 函数
    edges.forEach((edge) => graph.setItemState(edge, 'running', true));
    console.log(edges);
  });

  // 监听节点的 mouseleave 事件
  graph.on('node:mouseleave', (ev) => {
    // 获得当前鼠标操作的目标节点
    const node = ev.item;
    // 获得目标节点的所有相关边
    const edges = node.getEdges();
    // 将所有相关边的 running 状态置为 false，此时将会触发自定义节点的 setState 函数
    edges.forEach((edge) => graph.setItemState(edge, 'running', false));
  });      

      graph.data(DATA);
      graph.render();
    }
  })

  return <div ref={ref}></div>
}