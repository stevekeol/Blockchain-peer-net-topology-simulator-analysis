import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Button, Tooltip } from 'antd';
import { SwapOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Gauge } from '@antv/g2plot';

export default function() {
  const ref = React.useRef(null);
  // const container = ReactDOM.findDOMNode(ref.current);
  let gauge = null;

const ticks = [0, 1 / 3, 2 / 3, 1];
const color = ['#F4664A', '#FAAD14', '#30BF78'];  

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
    if(!gauge) {
      const gauge = new Gauge('container', {
        percent: 0,
        range: {
          ticks: [0, 1],
          color: ['l(0) 0:#F4664A 0.5:#FAAD14 1:#30BF78'],
        },
        indicator: {
          pointer: {
            style: {
              stroke: '#D0D0D0',
            },
          },
          pin: {
            style: {
              stroke: '#D0D0D0',
            },
          },
        },
        statistic: {
          title: {
            formatter: ({ percent }) => {
              if (percent < ticks[1]) {
                return 'bad';
              }
              if (percent < ticks[2]) {
                return 'not good';
              }
              return 'good';
            },
            style: ({ percent }) => {
              return {
                fontSize: '36px',
                lineHeight: 1,
                color: percent < ticks[1] ? color[0] : percent < ticks[2] ? color[1] : color[2],
              };
            },
          },
          content: {
            offsetY: 36,
            style: {
              fontSize: '24px',
              color: '#4B535E',
            },
            // formatter: () => '系统表现',
          },
        },
      });
      gauge.render();
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



// let data = 0.7;
// const interval = setInterval(() => {
//   if (data >= 1.5) {
//     clearInterval(interval);
//   }
//   data += 0.005;
//   gauge.changeData(data > 1 ? data - 1 : data);
// }, 100);
