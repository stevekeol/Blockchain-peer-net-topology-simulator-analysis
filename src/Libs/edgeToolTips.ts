import G6 from '@antv/g6';

const edgeToolTips = new G6.Tooltip({
  offsetX: 10,
  offsetY: 20,
  getContent(e) {
    const outDiv = document.createElement('div');
    outDiv.style.width = '180px';
    outDiv.innerHTML = `
      <h4>连接状态</h4>
      <ul>
        <li>edge-xxx</li>
      </ul>`
    return outDiv
  },
  itemTypes: ['edge']
});

export default edgeToolTips;