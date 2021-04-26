
/**
 * 获取某条待移除/断开边
 * @param {any} graph  graph实例
 * @param {any} source 边的source
 * @param {any} target 边的target
 *
 * @todo 应该创建edge实例,这样可以直接利用edge的id，全局搜索;避免下列啰嗦操作
 */
export default function getEdge(graph: any, source: any, target: any) {
  const edges = graph.findById(source)._cfg.edges;
  const edgeId = getEdgeId(edges, source, target);
  return graph.findById(edgeId);
}

function getEdgeId(edges: any, source: any, target: any) {
  const len = edges.length;
  for(let i = 0; i < len; i++) {
    if(edges[i]._cfg.model.source == source && edges[i]._cfg.model.target == target) {
      return edges[i]._cfg.id;
    }
  }
}