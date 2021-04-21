import React, { useState } from 'react';
import './index.css';

import NormalDistribution from '../NormalDistribution';

export default function() {
  return(
    <>
      <div id="container">
      {
        <NormalDistribution />
      }
      </div>
    </>
  )
}