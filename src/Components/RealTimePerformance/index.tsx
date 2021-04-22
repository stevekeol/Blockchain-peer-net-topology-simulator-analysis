import React, { useState, useEffect } from 'react';
import { Line } from '@antv/g2plot';
import { realTimeLineConfig } from '../../Configs';
import { useBoolean, useInterval } from 'react-use';

export default function() {
  let line: any = null;

  function getInitData() {
    // generate an array of random data
    const data = [];
    const time = new Date().getTime();

    for (let i = -19; i <= 0; i += 1) {
      data.push({
        x: time + i * 1000,
        y: Math.random(),
      });
    }
    return data;
  }

  /** 唤醒OR暂停 */
  const [isRunning, toggleIsRunning] = useBoolean(true);
  /** 控制速率 */
  const [delay, setDelay] = useState(1000);

  useEffect(() => {
    if(!line) {
      let options = Object.assign({data: getInitData()}, realTimeLineConfig)
      line = new Line('container', options as any)      
      line.render();
  }})

  /** 模拟实时计算出来的的性能评分 */
  useInterval(() => {
    const x = new Date().getTime(), y = Math.random();
    const newData = line.options.data.slice(1).concat({ x, y });
    line.update({
      data: newData
    }) 
  }, isRunning ? delay : null)

  return(
    <>
    </>
  )
}