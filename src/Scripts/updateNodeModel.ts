export default function getNodeModel(peerInfo: any) {
  const { size, fill } = getNodeStyle(peerInfo);
  /** 增量渲染,只需要传入需要更新的字段 */
  return {
    size, // 节点大小 - 连接数capacity
    /** style 留待确定什么样的节点才叫活跃状态的节点 */
    // type: 'scale-animation', // 节点的动效类型 - 节点活跃状态
    style: {
      fill, //节点填充色 - 连接占比connectPercent
      // stroke: 'orange', //节点描边
      // lineWidth: 5, // 描边宽度
      // fillOpacaity: 0.5 // 填充的透明度
    },
    // labelCfg: {
    //   style: {
    //     fill: 'black', //文本颜色
    //     opacity: 0.5, //文本透明度
    //     fontSize: 16, //文本大小
    //   }
    // }
  }
}

function getNodeStyle(peerInfo: any) {
  const size = Math.floor(60 + 3 * peerInfo.capacity);
  function getColor(connectPercent: number) {
    if(connectPercent <= 0) {
      return 'grey';
    } else if(connectPercent > 0 && connectPercent < 0.5) {
      return '#3DE2DC';
    } else if(connectPercent >= 0.5 && connectPercent < 0.9) {
      return 'orange';
    } else if(connectPercent >= 0.9 && connectPercent <= 1) {
      return 'red';
    } else {
      return 'black';
    }
  }
  return {
    size,
    fill: getColor(peerInfo.connectPercent)
  }
}