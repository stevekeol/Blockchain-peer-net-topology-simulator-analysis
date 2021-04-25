/**
 * 从整个graph图上获取随机的两个节点，来模拟连接事件
 * @param {any} nodes [description]
 */
export default function getRandomSourceAndTarget(nodes: any) {
  let result = [];
  for(let i = 0; i < 2; i++) {
    let ran = Math.floor(Math.random() * (nodes.length - i));;
    result.push(nodes[ran]);
    nodes[ran] = nodes[nodes.length - i - 1];
  }

  return {
    source: result[0],
    target: result[1]
  }
}