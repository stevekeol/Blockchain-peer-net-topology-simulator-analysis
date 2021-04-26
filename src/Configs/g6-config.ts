import { edgeToolTips, nodeToolTips } from '../Libs';
type Layout = 'random' 
| 'force' 
| 'circular' | 'radial' | 'MDS' | 'fruchterman' | 'dagre' | 'concentric';

const g6_config =  {
  width: 1200,
  height: 1000,
  fitView: true,
  // autoPaint: true,
  modes: {
    // default: ['drag-canvas', 'drag-node', 'click-select', 'zoom-canvas'],
    default: ['drag-node', 'click-select'],
    // default: ['drag-node'],
  },
  layout: {
    type: 'fruchterman', //可切换布局方式
    gravity: 4,
    speed: 5,
    // clustering: true,
    workerEnabled: true, //使用worker线程分担渲染线程的压力
  },
  // animate: true,
  defaultNode: {
    size: 60,
    style: {
      fill: '#3DE2DC',
      stroke: '#eee',  
    }          
  },
  defaultEdge: {
    style: {
      lineAppendWidth: 5,
      strokeOpacity: 0.5
    }
  },
  nodeStateStyles: {
    highlight: {
      opacity: 1,
    },
    dark: {
      opacity: 0.2,
    },
  },
  edgeStateStyles: {
    highlight: {
      stroke: '#999',
    },
  },        
  plugins: [nodeToolTips, edgeToolTips], // 自定义的功能插件
}

export default g6_config;