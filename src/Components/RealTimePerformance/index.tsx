import React, { useState, useEffect } from 'react';
import { Line } from '@antv/g2plot';

export default function() {
  let line: any = null;

  function getData() {
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
      line = new Line('container', {
        data: getData(),
        padding: 'auto',
        xField: 'x',
        yField: 'y',
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
          type: 'time',
          mask: 'HH:MM:ss',
        },
        lineStyle: {
          stroke: 'purple',
          fillOpacity: 0.5,
          lineWidth: 1,
          strokeOpacity: 1.0,
          shadowColor: 'black',
        },        
        smooth: true,
        point: {
          color: 'white'
        },
      });

      line.render();

      /** 模拟实时计算出来的的性能评分 */
      setInterval(() => {
        const x = new Date().getTime(), // current time
          y = Math.random();
        const newData = line.options.data.slice(1).concat({ x, y });
        line.changeData(newData);
      }, 1000);
    }
  })
  return(
    <>
    </>
  )
}