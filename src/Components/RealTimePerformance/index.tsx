import React, { useEffect } from 'react';
import { Line } from '@antv/g2plot';
import { realTimeLineConfig } from '../../Configs';

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

  useEffect(() => {
    if(!line) {
      let options = Object.assign({data: getInitData()}, realTimeLineConfig)
      line = new Line('container', options as any)      
      line.render();

      /** 模拟实时计算出来的的性能评分 */
      setInterval(() => {
        const x = new Date().getTime(), y = Math.random();
        const newData = line.options.data.slice(1).concat({ x, y });
        line.update({
          data: newData
        })
      }, 1200);
    }
  })
  return(
    <>
    </>
  )
}