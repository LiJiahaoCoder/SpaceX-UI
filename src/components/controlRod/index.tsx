import React from 'react';
import {
  RotateDownArrow,
  RotateLeftArrow,
  RotateRightArrow,
  RotateUpArrow,
  TransDownArrow,
  TransLeftArrow,
  TransRightArrow,
  TransUpArrow,
} from './arrow';
import styles from './index.scss';

export default function ControlRod () {

  return <>
    <div className={`${styles.rod} ${styles['rotation-rod']}`}>
      <div className={`${styles.btn} ${styles['hor-btn']} ${styles.up}`}><RotateUpArrow /></div>
      <div className={`${styles.btn} ${styles['ver-btn']} ${styles.right}`}><RotateRightArrow /></div>
      <div className={`${styles.btn} ${styles['hor-btn']} ${styles.bottom}`}><RotateDownArrow /></div>
      <div className={`${styles.btn} ${styles['ver-btn']} ${styles.left}`}><RotateLeftArrow /></div>
      <div className={`${styles.btn} ${styles['toggle-out']}`}></div>
      <div className={`${styles.btn} ${styles['toggle-inner']}`}></div>
    </div>
    <div className={`${styles.rod} ${styles['translation-rod']}`}>
      <div className={`${styles.btn} ${styles['hor-btn']} ${styles.up}`}><TransUpArrow /></div>
      <div className={`${styles.btn} ${styles['ver-btn']} ${styles.right}`}><TransRightArrow /></div>
      <div className={`${styles.btn} ${styles['hor-btn']} ${styles.bottom}`}><TransDownArrow /></div>
      <div className={`${styles.btn} ${styles['ver-btn']} ${styles.left}`}><TransLeftArrow /></div>
      <div className={`${styles.btn} ${styles['toggle-out']}`}></div>
      <div className={`${styles.btn} ${styles['toggle-inner']}`}></div>
    </div>
  </>;
}
