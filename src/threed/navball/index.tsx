import React, { useCallback, useEffect } from 'react';
import {
  Camera,
  ClampToEdgeWrapping,
  DirectionalLight,
  Mesh,
  MeshPhongMaterial,
  PerspectiveCamera,
  Renderer,
  Scene,
  SphereGeometry,
  TextureLoader,
  WebGLRenderer,
} from 'three';

import navballTexture from '../../assets/navball.png';
import styles from './index.scss';

const width = 200;
const height = 200;

interface IProps {
  x: number;
  y: number;
  z: number;
}

let sphere: Mesh;
let camera: Camera;
let scene: Scene;
let renderer: Renderer;

export default function Navball ({ x, y, z }: IProps) {
  function initializeCanvas (): void {
    renderer = new WebGLRenderer( { antialias: true, alpha: true } );

    renderer.setSize( width, height );

    document.getElementById( 'navball-container' )?.appendChild( renderer.domElement );
  }

  function initializeScene (): void {
    // create camera
    camera = new PerspectiveCamera( 70, width / height, 0.01, 1000 );
    camera.position.set(0, 0, 25);
    // create scene
    scene = new Scene();

    scene.add( createNavball() );
    scene.add( createLight() );
  }

  function createNavball (): Mesh {
    // create texture
    const loader = new TextureLoader();
    const texture = loader.load(navballTexture);
    texture.wrapS = ClampToEdgeWrapping;
    texture.wrapT = ClampToEdgeWrapping;

    // create sphere
    const geometry = new SphereGeometry( 13, 32, 32 );
    const material = new MeshPhongMaterial({ map: texture });

    sphere =  new Mesh( geometry, material );
    sphere.position.set( 0, 0, 0 );
    sphere.rotation.set( x, y, z );

    return sphere;
  }

  function createLight (): DirectionalLight {
    const light = new DirectionalLight( 0xaaaaaa );
    light.position.set( 1, 1, 1 ).normalize();
    light.intensity = 1.5;

    return light;
  }

  const render = useCallback(function renderCallback () {
    requestAnimationFrame( renderCallback );
    renderer.render( scene, camera );
  }, []);

  useEffect(() => {
    initializeCanvas();
    initializeScene();
    render();
  }, []);

  useEffect(() => {
    if ( sphere ) {
      sphere.rotation.set( x, y, z );
    }
  });

  return <div id='navball-container' className={styles['navball-container']}></div>;
}
