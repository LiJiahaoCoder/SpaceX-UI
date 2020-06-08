import React, { useEffect } from 'react';
import createEarth from '../../components/earth';
import Hud from '../../components/hud';

export default function Index () {
  useEffect(() => {
    createEarth();
  }, []);

  return <>
    <Hud />
  </>;
}
