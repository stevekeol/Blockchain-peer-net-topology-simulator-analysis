/**
 * 增量更新graph
 * @param {string} commandType 命令类型
 * @param {any}    data        该命令携带的数据
 */
type CommandType = 'addNode' | 'addEdge' | 'removeNode' | 'removeEdge' | 'updateNode' | 'updateEdge';

export default function updateGraph(graph: any, commandType: CommandType, logItem: any) {
  const data = logItem.data;

  switch (commandType) {
    /**
     * @TODO 
     */
    case "addNode":
      const newNode = {
        id: data.mac,
        label: `Node: ${data.mac.substring(0, 4)}`,
        payload: {
          height: 99,
          connectionRate: 0.7
        }
      }
      graph.addItem('node', newNode);
      break;

    case "addEdge":
      const newEdge = {
        source: data.source,
        target: data.target
      }
      graph.addItem('edge', newEdge);
      break;    

    case "removeNode":
      // code...
      break;

    case "removeEdge":
      // code...
      break;

    case "updateNode":
      // code...
      break;

    case "updateEdge":
      // code...
      break;                                  
    
    default:
      console.warn(`${commandType} is supported.`)
      break;
  }
}