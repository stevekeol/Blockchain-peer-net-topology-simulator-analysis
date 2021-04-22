# HightLights

+ G6的增量布局时，最新变动（新增，到达，参数变动）的点用波动的动效;删除的点用渐渐消失的动画?

+ 设置graph.changeData(data, stack)中stack为true，则可以实现undo/redo的重放

> 一些效果 

+ 选中的节点：蓝圈; 该节点连接的边：变色（?）
+ 选中的边： 
+ 当前处于业务活动中/活跃的节点(属性在变更的节点): 呼吸效果（暂时妥协为scale-animetion，因为呼吸效果没反应）
+ 新增的节点: 其连接线，动态的连接到其邻居节点上（当然是被连接入网才连接，否则统一放在临时池）

> 有意识的区分下 `交互状态` 和 `业务状态`。做出边界清晰的产品。

+ `游离池`中的孤儿节点，其关键状态是`leave it alone`多久了;

+ 可以学习react-use库中各种react hooks的使用和实现思路;

+ 使用EventEmitter，每个task来了，触发对应的Event即可;

# 数据
1. 读图的数据
```js
graph.save();
```
2. 接收数据并进行渲染
```js
graph.read(data) // data + render
```
3. 更新数据源,并重新渲染(在原有布局基础上，动态增加)
```js
graph.changeData(data, stack)
```

# 节点和边的动态变化
1. 新增节点: graph.addItem(type, model, stack)
```js
const newEdge = {
  source: '2',
  target: '5'
}

graph.addItem('edge', newEdge);
```
2. 删除节点: graph.removeItem(item, stack)


# 查找元素
1. 查找符合规则的单个元素: graph.find(type, fn)
  ```js
  const findNode = graph.find('node', (node) => {
    return node.get('model').x === 100;
  });
  ```
# 图计算
1. 查找节点连接数(入度，出度等): graph.getNodeDegree(node, degreeType, refresh)
```js
graph.getNodeDegree('node1', 'in/out/total');

