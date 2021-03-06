import React, { useEffect, useState } from 'react';
import { Camera } from 'three';
import ControlRod, { ANGLE } from '../../components/controlRod';
import Hud from '../../components/hud';
import createEarth, { INIT_POSITION_OF_CAMERA } from '../../threed/earth';
import Navball from '../../threed/navball';

let camera: Camera;
const IITIAL_NAVBALL_ROTATION = {
  x: Math.PI / 2,
  y: -Math.PI / 10,
  z: Math.PI / 1.8,
};

export default function Index () {
  const [ rotation, setRotation ] = useState({ x: 0, y: 0, z: 0 });
  const [ translation, setTranslation ] = useState( INIT_POSITION_OF_CAMERA );
  const [ navballRotation, setNavballRotation ] = useState( IITIAL_NAVBALL_ROTATION );

  useEffect(() => {
    camera = createEarth();
    setRotation({
      x: camera.rotation.x,
      y: camera.rotation.y,
      z: camera.rotation.z,
    });
    setTranslation({
      x: camera.position.x,
      y: camera.position.y,
      z: camera.position.z,
    });
  }, []);

  useEffect(() => {
    camera.rotation.set( rotation.x, rotation.y, rotation.z );
  }, [ rotation ]);

  useEffect(() => {
    camera.position.set( translation.x, translation.y, translation.z );
  }, [ translation ]);

  function handleRotate ( x: number, y: number ) {
    setRotation(pre => ({
      x: pre.x + x,
      y: pre.y + y,
      z: pre.z,
    }));
    // update nav ball rotation
    setNavballRotation(pre => ({
      x: pre.x + x / ANGLE * ANGLE,
      y: pre.y + y / ANGLE * ANGLE,
      z: pre.z,
    }));
  }

  function handleTranslate ( x: number, y: number, z: number ) {
    setTranslation(pre => ({
      x: pre.x + x,
      y: pre.y + y,
      z: pre.z + z,
    }));
  }

  return <>
    <Hud />
    <Navball {...navballRotation} />
    <ControlRod handleRotate={handleRotate} handleTranslate={handleTranslate} />
  </>;
}
