import React from 'react';
import { DownArrow, LeftArrow, RightArrow, UpArrow } from './arrow';
import styles from './index.scss';

export default function ControlRod () {

  return <div className={styles['control-rod']}>
    <div className={`${styles.btn} ${styles.up}`}><UpArrow /></div>
    <div className={`${styles.btn} ${styles.right}`}><RightArrow /></div>
    <div className={`${styles.btn} ${styles.bottom}`}><DownArrow /></div>
    <div className={`${styles.btn} ${styles.left}`}><LeftArrow /></div>
  </div>;
}
