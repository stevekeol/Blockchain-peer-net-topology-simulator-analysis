import React, { useState } from 'react';
import { Button, Tooltip } from 'antd';
import { SwapOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

import RealTimeMode from './RealTimeMode';
import ReplayMode from './ReplayMode';
import './index.css';

export default function() {
  const [isRealTimeMode, toggleMode] = useState(true);
  return(
    <>
      <Tooltip title={isRealTimeMode ? "实时模式": "回放模式"}>
        <Button type="primary" shape="circle" icon={<SwapOutlined />} onClick={() => toggleMode(!isRealTimeMode)} />
      </Tooltip>
      {isRealTimeMode && <RealTimeMode />}
      {!isRealTimeMode && <ReplayMode />}
    </>
  )
}