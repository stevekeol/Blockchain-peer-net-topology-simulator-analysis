import DATA from '../Datas/CanvasTest';

/**
 * 模拟定时产生节点
 * @TODO 节点的type定义
 * @param {number}   timeout 每隔多少秒产生一个新节点
 * @param {object[]} =       DATA}        data [description]
 */

interface Node {
  id: number;
  
}

export default function(timeout: number) {
  let _DATA = DATA;
  console.log(_DATA.length);
  return setTimeout(() => {
    let newNode = {
      id: `{_DATA.length}`,
      label: `node-{_DATA.length}`,
      cluster: 'c'
    }
    let newEdge = {
      source: `{_DATA.length-1}`,
      target: `{_DATA.length}`
    }
    _DATA.nodes.push(newNode);
    _DATA.edges.push(newEdge);
    return _DATA;
  }, timeout * 1000);
}