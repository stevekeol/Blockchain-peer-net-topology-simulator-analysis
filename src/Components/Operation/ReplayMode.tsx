import React, { useState } from 'react';
import './index.css';

import { Button, Radio } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import useTextFileReader from '../../Hooks/useTextFileReader';

export default function() {
  let { fileContent, isReading, error, trigger } = useTextFileReader();
  return(
    <>
      <Button 
        shape="round"
        icon={<ArrowDownOutlined />}
        onClick={() => {
          // trigger();
          // useTextFileReader()
          console.log(fileContent);
          
        }}
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