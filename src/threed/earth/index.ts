import {
  BufferGeometry,
  Camera,
  ClampToEdgeWrapping,
  DirectionalLight,
  Float32BufferAttribute,
  Mesh,
  MeshPhongMaterial,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Renderer,
  Scene,
  SphereGeometry,
  TextureLoader,
  Vector3,
  WebGLRenderer,
} from 'three';

import earthTexture from '../../assets/earth.jpg';

let camera: Camera;
let scene: Scene;
let renderer: Renderer;
let sphere: Mesh;

export const INIT_POSITION_OF_CAMERA = {
  x: 0,
  y: 0,
  z: 50,
};

export default function earth (): Camera {
  initializeCanvas();
  initializeScene();
  animate();

  return camera;
}

function initializeCanvas (): void {
  renderer = new WebGLRenderer( { antialias: true } );

  renderer.setSize( window.innerWidth, window.innerHeight );

  document.getElementById( 'earth-container' )?.appendChild( renderer.domElement );
}

function initializeScene (): void {
  const { x, y, z } = INIT_POSITION_OF_CAMERA;
  // create camera
  camera = new PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 1000 );
  camera.position.set(x, y, z);
  // create scene
  scene = new Scene();

  scene.add( createEarth() );
  scene.add( createLight() );
  createStars();
}

function createEarth (): Mesh {
  // create texture
  const loader = new TextureLoader();
  const texture = loader.load(earthTexture);
  texture.wrapS = ClampToEdgeWrapping;
  texture.wrapT = ClampToEdgeWrapping;

  // create sphere
  const geometry = new SphereGeometry( 65, 32, 32 );
  const material = new MeshPhongMaterial({ map: texture });

  sphere =  new Mesh( geometry, material );
  sphere.position.set( -10, -50, 0 );

  return sphere;
}

function createLight (): DirectionalLight {
  const light = new DirectionalLight( 0xaaaaaa );
  light.position.set( 1, 1, 1 ).normalize();

  return light;
}

function createStars () {
  let i;
  const r = 5;
  const starsGeometry = new BufferGeometry();

  const vertex = new Vector3();

  const vertices = [];
  for ( i = 0; i < 600; i ++ ) {
    vertex.x = Math.random() * 2 - 1;
    vertex.y = Math.random() * 2 - 1;
    vertex.z = Math.random() * 2 - 1;
    vertex.multiplyScalar( r );

    vertices.push( vertex.x, vertex.y, vertex.z );
  }

  starsGeometry.setAttribute( 'position', new Float32BufferAttribute( vertices, 3 ) );

  const starsMaterials = [
    new PointsMaterial( { color: 0x555555, size: 2, sizeAttenuation: false } ),
    new PointsMaterial( { color: 0x555555, size: 1, sizeAttenuation: false } ),
    new PointsMaterial( { color: 0x333333, size: 2, sizeAttenuation: false } ),
    new PointsMaterial( { color: 0x3a3a3a, size: 1, sizeAttenuation: false } ),
    new PointsMaterial( { color: 0x1a1a1a, size: 2, sizeAttenuation: false } ),
    new PointsMaterial( { color: 0x1a1a1a, size: 1, sizeAttenuation: false } ),
  ];

  for ( i = 10; i < 30; i++ ) {
    const stars = new Points( starsGeometry, starsMaterials[ i % 6 ] );

    stars.rotation.x = Math.random() * 6;
    stars.rotation.y = Math.random() * 6;
    stars.rotation.z = Math.random() * 6;
    stars.scale.setScalar( i * 10 );

    stars.matrixAutoUpdate = false;
    stars.updateMatrix();

    scene.add( stars );
  }
}

function animate (): void {
  requestAnimationFrame( animate );

  sphere.rotation.x += 0.00005;
  sphere.rotation.y += 0.0001;

  renderer.render( scene, camera );
}
