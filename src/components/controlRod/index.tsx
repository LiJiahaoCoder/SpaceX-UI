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
  handleTranslate: () => void;
  handleRotate: (x: number, y: number) => void;
}

const ANGLE = 0.005;

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
        onClick={handleTranslate}
      >
        <TransUpArrow />
      </div>
      <div
        className={`${styles.btn} ${styles['ver-btn']} ${styles.right}`}
        onClick={handleTranslate}
      >
        <TransRightArrow />
      </div>
      <div
        className={`${styles.btn} ${styles['hor-btn']} ${styles.bottom}`}
        onClick={handleTranslate}
      >
        <TransDownArrow />
      </div>
      <div
        className={`${styles.btn} ${styles['ver-btn']} ${styles.left}`}
        onClick={handleTranslate}
      >
        <TransLeftArrow />
      </div>
      <div className={`${styles.btn} ${styles['toggle-out']}`}></div>
      <div className={`${styles.btn} ${styles['toggle-inner']}`}></div>
    </div>
  </>;
}
