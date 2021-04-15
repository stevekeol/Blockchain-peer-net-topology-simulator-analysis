import React, { useState } from 'react';
import { Button, Radio } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { useAsyncFn } from 'react-use';

import { fileReader } from '../../Hooks';
import './index.css';

export default function() {
  return(
    <>
      <Button
        shape="round"
        icon={<ArrowDownOutlined />}
        /**
         * @TODO
         * 此处是成功读取文件后异地设置全局拓扑图的数据来源,待重写
         */
        onClick={() => fileReader()}
      >
      ImportData
      </Button>
      <Button
        shape="round"
        icon={<ArrowUpOutlined />}
        onClick={() => console.log("导出数据报表")}
      >
      GenerateReport
      </Button>
    </>
  )
}