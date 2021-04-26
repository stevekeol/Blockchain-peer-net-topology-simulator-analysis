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

      setInterval(() => {
        /**
         * @TODO 
         * 1. 创建节点的逻辑，其实是在connectionLog中体现，假如source/target是一个不存在的节点，就创建它
         * 2. 只有成功连接的edge，才显示在拓扑图中; 尝试连接的时长(评价指标?)，可以在内存中缓存计算
         */

        // 模拟:建立连接
        setTimeout(() => {
          const edge = connectedLog(graph);
          const { source, target } = edge.data;
          if(!graph.findById(source)) {
            updateGraph(graph, 'addNode', genNodeLog(source));
          }
          updateGraph(graph, 'addEdge', edge);
        }, 2000)
        
        // 模拟:断开连接
        setTimeout(() => {
          updateGraph(graph, 'removeEdge', disconnectedLog(graph));
        }, 3000)

        // 模拟:节点更新
        setTimeout(() => {
          updateGraph(graph, 'updateNode', nodeInfoLog(graph));
        }, 4000)

      }, 2000)

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