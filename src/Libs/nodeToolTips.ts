import G6 from '@antv/g6';

/**
 * 获取节点字段的方式: ${e.item.getModel().label || e.item.getModel().id}
 */
const nodeToolTips = new G6.Tooltip({
  offsetX: 10,
  offsetY: 20,
  getContent(e) {
    const outDiv = document.createElement('div');
    outDiv.style.width = '200px';
    outDiv.innerHTML = `
      <h4>节点状态</h4>
      <ul>
        <li>Label: ${e.item.getModel().label || e.item.getModel().id}</li>
        <li>Load: cpu-62%, memory-45%, bandWidth: 1.2M</li>
        <li>Recent: 2021-04-13 17:11:28</li>
      </ul>`
    return outDiv
  },
  itemTypes: ['node']
});

export default nodeToolTips;