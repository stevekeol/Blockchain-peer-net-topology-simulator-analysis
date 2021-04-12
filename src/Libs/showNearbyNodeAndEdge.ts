export default function(_graph) {
  const graph = _graph;

  function clearAllStats() {
    graph.setAutoPaint(false);
    graph.getNodes().forEach(function (node) {
      graph.clearItemStates(node);
    });
    graph.getEdges().forEach(function (edge) {
      graph.clearItemStates(edge);
    });
    graph.paint();
    graph.setAutoPaint(true);
  }

  graph.on('node:mouseenter', function (e) {
    const item = e.item;
    graph.setAutoPaint(false);
    graph.getNodes().forEach(function (node) {
      graph.clearItemStates(node);
      graph.setItemState(node, 'dark', true);
    });
    graph.setItemState(item, 'dark', false);
    graph.setItemState(item, 'highlight', true);
    graph.getEdges().forEach(function (edge) {
      if (edge.getSource() === item) {
        graph.setItemState(edge.getTarget(), 'dark', false);
        graph.setItemState(edge.getTarget(), 'highlight', true);
        graph.setItemState(edge, 'highlight', true);
        edge.toFront();
      } else if (edge.getTarget() === item) {
        graph.setItemState(edge.getSource(), 'dark', false);
        graph.setItemState(edge.getSource(), 'highlight', true);
        graph.setItemState(edge, 'highlight', true);
        edge.toFront();
      } else {
        graph.setItemState(edge, 'highlight', false);
      }
    });
    graph.paint();
    graph.setAutoPaint(true);
  });
  graph.on('node:mouseleave', clearAllStats);
  graph.on('canvas:click', clearAllStats);
}