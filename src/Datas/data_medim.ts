const data = {
  nodes: [
    {
      id: '0',
      label: 'node-0',
      type: 'scale-animation',
      size: 80,        
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