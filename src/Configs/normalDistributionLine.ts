const normalDistributionLineConfig = {
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
        fontSize: 18
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
};


export default normalDistributionLineConfig;

