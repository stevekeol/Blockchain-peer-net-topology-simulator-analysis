import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Button, Tooltip } from 'antd';
import { SwapOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Area, Line } from '@antv/g2plot';
import { normalDistributionLineConfig } from '../../Configs';

export default function() {
  const ref = React.useRef(null);
  let line: any = null;

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
    if(!line) {
      let options = Object.assign({data}, normalDistributionLineConfig);
      line = new Line('container', options as any);
      line.render();
    }
  })

  return(
    <></>
  )
}