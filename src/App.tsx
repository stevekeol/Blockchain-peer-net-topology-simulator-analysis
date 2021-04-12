import React, { useState } from 'react';
import './App.css';
import CanvasTest from './Components/CanvasTest';
// import Tutorital from './Components/Tutorital';

    // <Tutorital />
export default function() {
  return(
    <div className="App-header min-h-screen flex flex-col items-center justify-center text-white">
      <div className="title">节点网络拓扑图 - Simulator / Analyzer</div>
      <CanvasTest />
    </div>
  )
}