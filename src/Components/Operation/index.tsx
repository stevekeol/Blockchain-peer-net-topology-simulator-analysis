import React, { useState } from 'react';
import { Button, Tooltip } from 'antd';
import { SwapOutlined } from '@ant-design/icons';

import RealTimeMode from './RealTimeMode';
import ReplayMode from './ReplayMode';
import './index.css';
import 'antd/dist/antd.css';

export default function() {
  const [isRealTimeMode, toggleMode] = useState(false);
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