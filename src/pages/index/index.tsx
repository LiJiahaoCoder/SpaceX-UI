import React, { useEffect } from 'react';
import Hud from '../../components/hud';
import createEarth from '../../threed/earth';
import Navball from '../../threed/navball';

export default function Index () {
  useEffect(() => {
    createEarth();
  }, []);

  return <>
    <Hud />
    <Navball />
  </>;
}
