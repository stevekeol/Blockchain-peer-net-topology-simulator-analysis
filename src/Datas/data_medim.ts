const data = {
  nodes: [
    {
      id: '0',
      label: 'node-0',
      size: 80,
      style: {
        //
      },
      // 包括节点的其它数据，统一挂载关系图上，使得整个应用的数据源唯一
      payload: {
        name: 'zhangjie',
        age: 28
      },    
      type: 'scale-animation',
      cluster: 'a',
    },
    {
      id: '1',
      label: 'node-1',
      cluster: 'a',
    },
    {
      id: '2',
      label: 'node-2',
      cluster: 'a',
    },
    {
      id: '3',
      label: 'node-3',
      cluster: 'a',      
    } 
  ],
  edges: [
    {
      source: '0',
      target: '1',
    },
    {
      source: '0',
      target: '2',
    },
    {
      source: '0',
      target: '3',
    }    
  ],
};

export default data;