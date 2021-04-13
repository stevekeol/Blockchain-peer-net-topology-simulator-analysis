export default function(graph) {
  graph.on('node:click', function(e) {
    const self = this;
    const { item } = e;
    const type = item.getType();
    const selected = graph.findAllByState(type, self.selectedState);
    console.log(selected);
  });
}