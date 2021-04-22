import React, { useState } from 'react';
import { Button, Tooltip } from 'antd';
import { SwapOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

import RealTimeMode from './RealTimeMode';
import ReplayMode from './ReplayMode';
import './index.css';

export default function() {
  // 其实此处可以使用useBoolean, 更简洁
  const [isRealTimeMode, toggleMode] = useState(true);
  return(
    <>
      <Tooltip title={isRealTimeMode ? "实时模式": "回放模式"}>
        <Button type="primary" shape="circle" icon={<SwapOutlined />} onClick={() => toggleMode(!isRealTimeMode)} />
      </Tooltip>
      <div id="container1"></div>
      {isRealTimeMode && <RealTimeMode />}
      {!isRealTimeMode && <ReplayMode />}
    </>
  )
}