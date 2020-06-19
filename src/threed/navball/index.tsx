import React, { useEffect } from 'react';
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

const width = 150;
const height = 150;

let camera: Camera;
let scene: Scene;
let renderer: Renderer;
let sphere: Mesh;

export default function Navball () {
  function initializeCanvas (): void {
    renderer = new WebGLRenderer( { antialias: true, alpha: true } );

    renderer.setSize( width, height );

    document.getElementById( 'navball-container' )?.appendChild( renderer.domElement );
  }

  function initializeScene (): void {
    // create camera
    camera = new PerspectiveCamera( 70, width / height, 0.01, 1000 );
    camera.position.set(0, 0, 50);
    // create scene
    scene = new Scene();

    scene.add( createEarth() );
    scene.add( createLight() );
  }

  function createEarth (): Mesh {
    // create texture
    const loader = new TextureLoader();
    const texture = loader.load(navballTexture);
    texture.wrapS = ClampToEdgeWrapping;
    texture.wrapT = ClampToEdgeWrapping;

    // create sphere
    const geometry = new SphereGeometry( 25, 32, 32 );
    const material = new MeshPhongMaterial({ map: texture });

    sphere =  new Mesh( geometry, material );
    sphere.position.set( 0, 0, 0 );

    return sphere;
  }

  function createLight (): DirectionalLight {
    const light = new DirectionalLight( 0xffffff );
    light.position.set( 1, 1, 1 ).normalize();
    light.intensity = 1.5;

    return light;
  }

  function render (): void {
    requestAnimationFrame( render );
    renderer.render( scene, camera );
  }

  useEffect(() => {
    initializeCanvas();
    initializeScene();
    render();
  }, []);

  return <div id='navball-container' className={styles['navball-container']}></div>;
}
