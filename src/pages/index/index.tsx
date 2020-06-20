import React, { useEffect, useState } from 'react';
import { Camera } from 'three';
import ControlRod from '../../components/controlRod';
import Hud from '../../components/hud';
import createEarth from '../../threed/earth';
import Navball from '../../threed/navball';

let camera: Camera;

export default function Index () {
  const [ rotation, setRotation ] = useState({ x: 0, y: 0, z: 0 });
  const [ translation, setTranslation ] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    camera = createEarth();
    setRotation({
      x: camera.rotation.x,
      y: camera.rotation.y,
      z: camera.rotation.z,
    });
  }, []);

  useEffect(() => {
    camera.rotation.set( rotation.x, rotation.y, rotation.z );
  }, [rotation]);

  function handleRotate (x: number, y: number) {
    setRotation(pre => ({
      x: pre.x + x,
      y: pre.y + y,
      z: pre.z,
    }));
  }

  function handleTranslate (  ) {
    console.log('translate');
  }

  return <>
    <Hud />
    <Navball />
    <ControlRod handleRotate={handleRotate} handleTranslate={handleTranslate} />
  </>;
}
