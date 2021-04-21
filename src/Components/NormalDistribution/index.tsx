import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Button, Tooltip } from 'antd';
import { SwapOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Area, Line } from '@antv/g2plot';
import { normalDistributionData } from '../../Datas';

console.log( normalDistributionData instanceof Array)
console.log(normalDistributionData[0])

export default function() {
  const ref = React.useRef(null);
  // const container = ReactDOM.findDOMNode(ref.current);
  let area = null;

const data = 
[
  {
    "connectionRate": "0.1",
    "nodes": ['node1'],
    "connectionCount": 1
  },
  {
    "connectionRate": "0.2",
    "nodes": ['node2'],
    "connectionCount": 1
  },
  {
    "connectionRate": "0.3",
    "nodes": ['node3', 'node4'],
    "connectionCount": 1
  },
  {
    "connectionRate": "0.4",
    "nodes": ['node4'],
    "connectionCount": 1
  },
  {
    "connectionRate": "0.5",
    "nodes": ['node5'],
    "connectionCount": 1
  },
  {
    "connectionRate": "0.6",
    "nodes": ['node11', 'node12', 'node13', 'node14', 'node15', 'node16', 'node17'],
    "connectionCount": 7
  },
  {
    "connectionRate": "0.7",
    "nodes": ['node7'],
    "connectionCount": 1
  },
  {
    "connectionRate": "0.8",
    "nodes": ['node8'],
    "connectionCount": 1
  },
  {
    "connectionRate": "0.9",
    "nodes": ['node9'],
    "connectionCount": 1
  },
  {
    "connectionRate": "1.0",
    "nodes": ['node20', 'node21', 'node22', 'node23', 'node24', 'node25'],
    "connectionCount": 6
  },
]

  useEffect(() => {
    if(!area) {
      const line = new Line('container', {
        data,
        padding: 'auto',
        autoFit: true,
        xField: 'connectionRate',
        yField: 'connectionCount',
        yAxis: {
          grid: {
            line: {
              style: {
                stroke: 'white',
                lineWidth: 0.5,
                lineDash: [4, 5],
                strokeOpacity: 1,
              }
            }
          }          
        },        
        xAxis: {
          title: {
            text: '连接占比分布图',
            style: {
              fill: 'white',
            },
          },
        },
        tooltip: {
          fields: ['connectionCount', 'nodes'],
        },
        lineStyle: {
          stroke: 'yellow',
          fillOpacity: 0.5,
          lineWidth: 1,
          strokeOpacity: 1.0,
          shadowColor: 'black',
        },
        smooth: true,
      });
      line.render();
    }
  })

  // const [isRealTimeMode, toggleMode] = useState(false);
  return(
    <>
    {
      // <div className="canvas" ref={ref}></div>
    }
    </>
  )
}