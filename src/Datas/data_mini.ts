const data = {
  nodes: [
    {
      id: '0',
      label: 'node-0',
      size: 80,
      // 包括节点的其它数据，统一挂载关系图上，使得整个应用的数据源唯一
      payload: {
        name: 'zhangjie',
        age: 28
      },    
      type: 'scale-animation',
      cluster: 'a',
    }
  ],
  edges: []
};

export default data;