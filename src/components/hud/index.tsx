import React from 'react';
import hudRingInner from '../../assets/hud-ring-inner.png';
import hudRing from '../../assets/hud-ring.png';

import styles from './index.scss';

export default function Hud () {
  return <div className={styles.hud}>
    <img className={styles['hud-ring']} src={hudRing} alt='...'/>
    <img className={styles['hud-ring']} src={hudRingInner} alt='...'/>;
  </div>;
}
