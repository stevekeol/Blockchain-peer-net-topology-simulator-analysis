import G6 from '@antv/g6';

export default function() {
  const lineDash = [4, 2, 1, 2];
  console.log('enter edge')

  // 注册名为 'can-running' 的边
  G6.registerEdge(
    'can-running',
    {
      // 复写setState方法
      setState(name, value, item) {
        const shape = item.get('keyShape');
        // 监听 running 状态
        if (name === 'running') {
          // running 状态为 true 时
          if (value) {
            let index = 0; // 边 path 图形的动画
            shape.animate(
              () => {
                index++;
                if (index > 9) {
                  index = 0;
                }
                const res = {
                  lineDash,
                  lineDashOffset: -index,
                };
                // 返回需要修改的参数集，这里修改了 lineDash,lineDashOffset
                return res;
              },
              {
                repeat: true, // 动画重复
                duration: 3000, // 一次动画的时长为 3000
              },
            );
          } else {
            // running 状态为 false 时
            // 结束动画
            shape.stopAnimate();
            // 清空 lineDash
            shape.attr('lineDash', null);
          }
        }
      },
    },
    'cubic-horizontal',
  ); // 该自定义边继承了内置横向三阶贝塞尔曲线边 cubic-horizontal

  // // 监听节点的 mouseenter 事件
  // graph.on('node:mouseenter', (ev) => {
  //   // 获得当前鼠标操作的目标节点
  //   const node = ev.item;
  //   // 获得目标节点的所有相关边
  //   const edges = node.getEdges();
  //   // 将所有相关边的 running 状态置为 true，此时将会触发自定义节点的 setState 函数
  //   edges.forEach((edge) => graph.setItemState(edge, 'running', true));
  // });

  // // 监听节点的 mouseleave 事件
  // graph.on('node:mouseleave', (ev) => {
  //   // 获得当前鼠标操作的目标节点
  //   const node = ev.item;
  //   // 获得目标节点的所有相关边
  //   const edges = node.getEdges();
  //   // 将所有相关边的 running 状态置为 false，此时将会触发自定义节点的 setState 函数
  //   edges.forEach((edge) => graph.setItemState(edge, 'running', false));
  // });
}