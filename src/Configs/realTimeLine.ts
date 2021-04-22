const realTimeLineConfig =  {
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
    title: {
      text: '网络性能实时趋势图',
      style: {
        fill: 'white',
        fontSize: 18
      },
    },          
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
    color: 'white',
    size: 0,
  },  
}

export default realTimeLineConfig;