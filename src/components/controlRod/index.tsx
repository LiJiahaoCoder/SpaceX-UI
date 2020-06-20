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

interface IProps {
  handleTranslate: ( x: number, y: number, z: number ) => void;
  handleRotate: ( x: number, y: number ) => void;
}

export const ANGLE = 0.005;
const DISTANCE = 0.05;

export default function ControlRod ({ handleRotate, handleTranslate }: IProps) {

  return <>
    <div className={`${styles.rod} ${styles['rotation-rod']}`}>
      <div
        className={`${styles.btn} ${styles['hor-btn']} ${styles.up}`}
        onClick={() => handleRotate( ANGLE, 0 )}
      >
        <RotateUpArrow />
      </div>
      <div
        className={`${styles.btn} ${styles['ver-btn']} ${styles.right}`}
        onClick={() => handleRotate( 0, -ANGLE )}
      >
        <RotateRightArrow />
      </div>
      <div
        className={`${styles.btn} ${styles['hor-btn']} ${styles.bottom}`}
        onClick={() => handleRotate( -ANGLE, 0 )}
      >
        <RotateDownArrow />
      </div>
      <div
        className={`${styles.btn} ${styles['ver-btn']} ${styles.left}`}
        onClick={() => handleRotate( 0, ANGLE )}
      >
        <RotateLeftArrow />
      </div>
      <div className={`${styles.btn} ${styles['toggle-out']}`}></div>
      <div className={`${styles.btn} ${styles['toggle-inner']}`}></div>
    </div>
    <div className={`${styles.rod} ${styles['translation-rod']}`}>
      <div
        className={`${styles.btn} ${styles['hor-btn']} ${styles.up}`}
        onClick={() => handleTranslate( 0, 0, -DISTANCE )}
      >
        <TransUpArrow />
      </div>
      <div
        className={`${styles.btn} ${styles['ver-btn']} ${styles.right}`}
        onClick={() => handleTranslate( DISTANCE, 0, 0 )}
      >
        <TransRightArrow />
      </div>
      <div
        className={`${styles.btn} ${styles['hor-btn']} ${styles.bottom}`}
        onClick={() => handleTranslate( 0, 0, DISTANCE )}
      >
        <TransDownArrow />
      </div>
      <div
        className={`${styles.btn} ${styles['ver-btn']} ${styles.left}`}
        onClick={() => handleTranslate( -DISTANCE, 0, 0 )}
      >
        <TransLeftArrow />
      </div>
      <div className={`${styles.btn} ${styles['toggle-out']}`}></div>
      <div className={`${styles.btn} ${styles['toggle-inner']}`}></div>
    </div>
  </>;
}
