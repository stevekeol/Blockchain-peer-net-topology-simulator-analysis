import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import G6 from '@antv/g6';
import { createGlobalState } from 'react-use';
import { PeerInfo, Operation } from './Components';
import { nodeScaleAnimetion, showNearbyNodeAndEdge, edgeToolTips, nodeToolTips } from './Libs';
import { data, dataMini, dataMedim } from './Datas';
import './App.css';

export default function() {
  const ref = React.useRef(null);
  let graph: any = null;

  nodeScaleAnimetion(); // 为活跃节点配置缩放动效（也可以插件形式，写入plugins）
  // edgeDottedAnimetion(); // 为选中节点相邻边增加显示动效

  // graph && graph.changeData(data)

  /**
   * @TODO
   * useEffect会在每次页面渲染之后，都执行: 构建g6容器,读取解析节点数据并渲染等;
   */
  useEffect(() => {
    if(!graph) {
      /**
       * @TODO
       * 以文件配置形式隔离此处代码
       */
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

      // 新增节点
      setTimeout(() => {
        const newNode = {
          id: '5',
          label: 'node-5',
          x: 200,
          y: 200
        };
        graph.addItem('node', newNode);
      }, 3000)

      // 新增连接
      setTimeout(() => {
        const newEdge = {
          source: '2',
          target: '5'
        }
        graph.addItem('edge', newEdge);
      }, 5000)


      //删除节点
      setTimeout(() => {
        const newNode = {
          id: '5',
          label: 'node-5',
          x: 200,
          y: 200
        };

        graph.removeItem(graph.findById('5'));
      }, 7000)


      //节点样式更改(取决于节点负载)
      setTimeout(() => {
        const model = {
          id: '0',
          label: 'node-0',
          style: {
            fill: 'red',
          },
        };

        const item = graph.findById('0');
        graph.updateItem(item, model);        
      }, 9000)

      // setTimeout(() => {
      //   graph.changeData(dataMini)
      // }, 3000)


      // showSelectedNodeInfo(graph);
      showNearbyNodeAndEdge(graph);

      graph.data(dataMedim);
      graph.render();

      // console.log(graph.save());
      // console.log(graph.getNodeDegree('0', 'out'));
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