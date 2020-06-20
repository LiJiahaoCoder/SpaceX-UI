import React from 'react';
import hudRingInner from '../../assets/hud-ring-inner.png';
import hudRing from '../../assets/hud-ring.png';

import styles from './index.scss';

export default function Hud () {
  return <div className={styles.hud}>
    <img className={styles['hud-ring']} src={hudRing} alt='...'/>
    <img className={styles['hud-ring']} src={hudRingInner} alt='...'/>
    <div className={styles['rotation-label']}>Roll</div>
    <div className={styles.rotation}>15°</div>
    <div className={styles['translation-label']}>
      <span>X</span>
      <span>Y</span>
      <span>Z</span>
    </div>
    <div className={styles.translation}>
      <span>100.0m</span>
      <span>200.1m</span>
      <span>21.8m</span>
    </div>
  </div>;
}
