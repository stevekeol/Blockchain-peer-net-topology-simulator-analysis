import React, { useState } from 'react';
import './index.css';

import NormalDistribution from '../NormalDistribution';
import PerformanceGauge from '../PerformanceGauge';
import RealTimePerformance from '../RealTimePerformance';

export default function() {
  return(
    <>
      <div id="container" className="normalDistribution">
        <NormalDistribution />
      </div>
      {
      // <div className="performanceGauge">
      //   <PerformanceGauge />
      // </div>
      }
      {
      <div className="RealTimePerformance">
        <RealTimePerformance />
      </div>
      }
    </>
  )
}