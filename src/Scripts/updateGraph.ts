/**
 * 增量更新graph
 * @param {string} commandType 命令类型
 * @param {any}    data        该命令携带的数据
 */
import getNodeModel from './updateNodeModel';
import getEdge from './getEdge';

type CommandType = 'addNode' | 'addEdge' | 'removeNode' | 'removeEdge' | 'hideNode' | 'updateNode' | 'updateEdge';

export default function updateGraph(graph: any, commandType: CommandType, logItem: any) {
  const data = logItem.data;

  switch (commandType) {
    /**
     * @TODO 
     * 其实DIHT的日志中不应该出现“新增节点”一说
     * 节点的创建是静默的，无需广播的;只有尝试发起交易或连接，才能入网
     *
     * 只有连接事件时,判断mac节点的存在，若无则创建节点，并创建连线;
     */
    case "addNode":
      const newNode = {
        id: data.mac,
        label: `Node: ${data.mac.substring(0, 4)}`,
        payload: {
          id: data.mac,
          capacity: 0,
          connectPercent: 0,
          blockHeight: 0,
          delay: 0
        }
      }
      console.info("%c【节点进入】: " + data.mac, 'color:white;background:blue');
      graph.addItem('node', newNode);
      break;

    /**
     * @TODO
     * 1. node.addEdge(edge) 以提升部分性能
     * 2. 需要判断该连接是否已存在,是的话则打印日志并忽略
     */
    case "addEdge":
      const newEdge = {
        source: data.source,
        target: data.target
      }
      // console.info(`%c【连接存在】: ${data.source} ===> ${data.target}`, 'color:grey');
      console.info(`【连接创建】: ${data.source} ===> ${data.target}`);
      graph.addItem('edge', newEdge);
      break;

    /**
     * @TODO
     * 1. 其实正式环境中没有移除节点一说，只有节点下线的说法(但节点下线是没有日志可显示的)
     * 2. 即使节点下线，也只能隐藏该节点而不应该移除节点，因为该节点的连接关系还在(其实也不在了);
     */
    case "removeNode":
    case "hideNode":
      console.info("【节点退出】: " + data.mac);

      graph.removeItem(graph.findById(data.mac))
      break;

    case "removeEdge":
      console.info(`%c【断开连接】: ${data.source} ===> ${data.target}`, 'color:blue;background:orange');

      const node = graph.findById(data.source);
      const edge = getEdge(graph, data.source, data.target);
      node.removeEdge(edge);
      break;

    case "updateNode":
      console.info("【节点更新】: " + data.mac);

      graph.updateItem(data.mac, getNodeModel(data.peerInfo));
      break;

    /**
     * @TODO
     */
    case "updateEdge":
      console.info("【连接更新】: " + data.mac);
      break;                                  
    
    default:
      console.warn(`【异常日志】: ${commandType} is supported.`)
      break;
  }
}