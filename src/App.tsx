import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import G6 from '@antv/g6';

import { PeerInfo, Operation } from './Components';
import { nodeScaleAnimetion, showNearbyNodeAndEdge } from './Libs';

import { data, dataMini, dataMedim } from './Datas';
import { G6_CONFIG } from './Configs';
import './App.css';

import { genNodeLog, connectedLog, disconnectedLog, nodeInfoLog } from './Scripts/logFactory';
import updateGraph from './Scripts/updateGraph';

export default function() {
  const ref = React.useRef(null);
  let graph: any = null;

  nodeScaleAnimetion(); // 为活跃节点配置缩放动效（也可以插件形式，写入plugins）
  // edgeDottedAnimetion(); // 为选中节点相邻边增加显示动效

  /**
   * @TODO useEffect会在每次页面渲染之后，都执行: 构建g6容器,读取解析节点数据并渲染等?
   */
  useEffect(() => {
    if(!graph) {
      graph = new G6.Graph(
        Object.assign({
          container: ReactDOM.findDOMNode(ref.current) as HTMLElement
        },
        G6_CONFIG)
      );

      const tast = {
        addEdge: addEdge,
        removeEdge: removeEdge,
        updateNode: updateNode
      }

      /** 
       * 模拟:建立连接
       * 只有成功连接的edge，才显示在拓扑图中; 尝试连接的时长(评价指标?)，可以在内存中缓存计算
       */
      function addEdge() {
        const edge = connectedLog(graph);
        const { source, target } = edge.data;
        if(!graph.findById(source)) {
          updateGraph(graph, 'addNode', genNodeLog(source));
        }
        updateGraph(graph, 'addEdge', edge);        
      }

      /** 模拟:断开连接 */
      function removeEdge() {
        updateGraph(graph, 'removeEdge', disconnectedLog(graph));
      }

      /** 模拟:节点更新 */
      function updateNode() {
        updateGraph(graph, 'updateNode', nodeInfoLog(graph));
      }

      setInterval(() => {
        let random = Math.random();
        if(random >= 0 && random < 0.333) {
          addEdge();
        } else if(random >= 0.333 && random < 0.666) {
          removeEdge();
        } else if(random >= 0.666 && random <= 1) {
          updateNode();
        }
      }, 2000)

      // setInterval(() => {

      //   // 模拟:建立连接
      //   setTimeout(() => {
      //     // const edge = connectedLog(graph);
      //     // const { source, target } = edge.data;
      //     // if(!graph.findById(source)) {
      //     //   updateGraph(graph, 'addNode', genNodeLog(source));
      //     // }
      //     // updateGraph(graph, 'addEdge', edge);
      //   }, 2000)
        
      //   // 模拟:断开连接
      //   setTimeout(() => {
      //     // updateGraph(graph, 'removeEdge', disconnectedLog(graph));
      //   }, 3000)

      //   // 模拟:节点更新
      //   setTimeout(() => {
      //     // updateGraph(graph, 'updateNode', nodeInfoLog(graph));
      //   }, 4000)

      // }, 2000)

      // showSelectedNodeInfo(graph);
      showNearbyNodeAndEdge(graph);

      graph.data(dataMedim);
      graph.render();

      // // 虽然成功运行，但图形上貌似没移除连接边
      // setTimeout(() => {
      //   console.log('===')
      //   const node = graph.findById('0');
      //   const id = node._cfg.edges[0]._cfg.model.id;
      //   const edge = graph.findById(id);
      //   console.log(node)
      //   console.log(edge)
      //   node.removeEdge(edge);
      // }, 1000)

      // graph.findById('0').getModel().payload;
      // node.getNeighbors(type)
      // node.getEdges()/node.getInEdges()/node.getOutEdges()
      // node.addEdge(edge) / node.removeEdge(edge)

      // 切换布局
      // const layout = new G6.Layout['layoutName']
      // layout.updateCfg(cfg)
    }
  })


  /**
   * @Test 命令模式下的各种处理逻辑
   */

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