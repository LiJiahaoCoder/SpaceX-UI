import React from 'react';
import { DownArrow, LeftArrow, RightArrow, UpArrow } from './arrow';
import styles from './index.scss';

export default function ControlRod () {

  return <div className={styles['control-rod']}>
    <div className={`${styles.btn} ${styles['hor-btn']} ${styles.up}`}><UpArrow /></div>
    <div className={`${styles.btn} ${styles['ver-btn']} ${styles.right}`}><RightArrow /></div>
    <div className={`${styles.btn} ${styles['hor-btn']} ${styles.bottom}`}><DownArrow /></div>
    <div className={`${styles.btn} ${styles['ver-btn']} ${styles.left}`}><LeftArrow /></div>
    <div className={styles['toggle-out']}></div>
    <div className={styles['toggle-inner']}></div>
  </div>;
}
