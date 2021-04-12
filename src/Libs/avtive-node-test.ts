import G6 from '@antv/g6';

export default function() {
  G6.registerBehavior('activate-node', {
    getDefaultCfg() {
      return {
        multiple: true
      };
    },
    getEvents() {
      return {
        'node:click': 'onNodeClick',
        'canvas:click': 'onCanvasClick'
      };
    },
    onNodeClick(e) {
      const graph = this.graph;
      const item = e.item;
      if (item.hasState('active')) {
        graph.setItemState(item, 'active', false);
        return;
      }
      // this 上即可取到配置，如果不允许多个 'active'，先取消其他节点的 'active' 状态
      if (!this.multiple) {
        this.removeNodesState();
      }
      // 置点击的节点状态 'active' 为 true
      graph.setItemState(item, 'active', true);
    },
    onCanvasClick(e) {
      // shouldUpdate 可以由用户复写，返回 true 时取消所有节点的 'active' 状态，即将 'active' 状态置为 false
      if (this.shouldUpdate(e)) {
        removeNodesState();
      }
    },
    removeNodesState() {
      graph.findAllByState('node', 'active').forEach(node => {
          graph.setItemState(node, 'active', false);
        });
    }
  });
}