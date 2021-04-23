import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import G6 from '@antv/g6';

import { PeerInfo, Operation } from './Components';
import { nodeScaleAnimetion, showNearbyNodeAndEdge } from './Libs';

import { data, dataMini, dataMedim } from './Datas';
import { G6_CONFIG } from './Configs';
import './App.css';

export default function() {
  const ref = React.useRef(null);
  let graph: any = null;

  nodeScaleAnimetion(); // 为活跃节点配置缩放动效（也可以插件形式，写入plugins）
  // edgeDottedAnimetion(); // 为选中节点相邻边增加显示动效

  /**
   * @TODO
   * useEffect会在每次页面渲染之后，都执行: 构建g6容器,读取解析节点数据并渲染等;
   */
  useEffect(() => {
    if(!graph) {
      graph = new G6.Graph(
        Object.assign({
          container: ReactDOM.findDOMNode(ref.current) as HTMLElement
        },
        G6_CONFIG)
      );


      setInterval(() => {
        // 新增节点-demo
        setTimeout(() => {
          const newNode = {
            id: '5',
            label: 'node-5',
            x: 200,
            y: 200
          };
          graph.addItem('node', newNode);
        }, 1000)

        // 新增连接-demo
        setTimeout(() => {
          const newEdge = {
            source: '2',
            target: '5'
          }
          graph.addItem('edge', newEdge);
        }, 3000)


        //删除节点-demo
        setTimeout(() => {
          const newNode = {
            id: '5',
            label: 'node-5',
            x: 200,
            y: 200
          };

          graph.removeItem(graph.findById('5'));
        }, 5000)


        //节点样式更改(取决于节点负载)-demo
        setTimeout(() => {
          const model = {
            id: '0',
            label: 'node-0',
            style: {
              fill: 'orange',
            },
          };

          const item = graph.findById('0');
          graph.updateItem(item, model);     
        }, 7000)

      }, 9000)

      // showSelectedNodeInfo(graph);
      showNearbyNodeAndEdge(graph);

      graph.data(dataMedim);
      graph.render();
    }
  })

  /**
   * @Test useContext在跨组件传值时的使用
   */

  return(
    <div className="app">
      <div className="canvas" ref={ref}>网络节点拓扑</div>
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