import React from 'react'
import styles from './index.css'

export default function ({ x=100, y=100 }){
  console.log('enter edgeTooltips-=-=-')
  console.log(x,y)
  // return (
  //   <div className="zhangjieTest">zhangjie</div>
  // )
  return (
    <div className={styles.edgeTooltips} style={{ top: `${0}px`, left: `${0}px`}}>
      <div className={styles.edgeTitle}>
        <p className={styles.tooltipsCommon}>当前节点状态</p>
        <p className={`${styles.tooltipsCommon} ${styles.tooltipsMoney}`}>xxx1</p>
        <p className={`${styles.tooltipsCommon} ${styles.tooltipsDate}`}>xxx2</p>
      </div>
      <div className={styles.edgeDetail}>
        <div className={styles.detailContent}>
          <p className={styles.edgeCode}>高度：</p>
          <span className={styles.edgeValue}>12345</span>
        </div>
        <div className={styles.detailContent}>
          <p className={styles.edgeCode}>连接数：</p>
          <span className={styles.edgeValue}>5 / 10</span>
        </div>
        <div className={styles.detailContent}>
          <p className={styles.edgeCode}>其它：</p>
          <span className={styles.edgeValue}>...</span>
        </div>
      </div>
    </div>
  )
}