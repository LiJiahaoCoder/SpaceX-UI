"use strict";
exports.__esModule = true;
var three_1 = require("three");
var earth_jpg_1 = require("../../assets/earth.jpg");
var camera;
var scene;
var renderer;
var sphere;
function earth() {
    initializeCanvas();
    initializeScene();
    animate();
    return camera;
}
exports["default"] = earth;
function initializeCanvas() {
    var _a;
    renderer = new three_1.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    (_a = document.getElementById('earth-container')) === null || _a === void 0 ? void 0 : _a.appendChild(renderer.domElement);
}
function initializeScene() {
    // create camera
    camera = new three_1.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 1000);
    camera.position.set(0, 0, 50);
    // create scene
    scene = new three_1.Scene();
    scene.add(createEarth());
    scene.add(createLight());
    createStars();
}
function createEarth() {
    // create texture
    var loader = new three_1.TextureLoader();
    var texture = loader.load(earth_jpg_1["default"]);
    texture.wrapS = three_1.ClampToEdgeWrapping;
    texture.wrapT = three_1.ClampToEdgeWrapping;
    // create sphere
    var geometry = new three_1.SphereGeometry(65, 32, 32);
    var material = new three_1.MeshPhongMaterial({ map: texture });
    sphere = new three_1.Mesh(geometry, material);
    sphere.position.set(-10, -50, 0);
    return sphere;
}
function createLight() {
    var light = new three_1.DirectionalLight(0xaaaaaa);
    light.position.set(1, 1, 1).normalize();
    return light;
}
function createStars() {
    var i;
    var r = 5;
    var starsGeometry = new three_1.BufferGeometry();
    var vertex = new three_1.Vector3();
    var vertices = [];
    for (i = 0; i < 600; i++) {
        vertex.x = Math.random() * 2 - 1;
        vertex.y = Math.random() * 2 - 1;
        vertex.z = Math.random() * 2 - 1;
        vertex.multiplyScalar(r);
        vertices.push(vertex.x, vertex.y, vertex.z);
    }
    starsGeometry.setAttribute('position', new three_1.Float32BufferAttribute(vertices, 3));
    var starsMaterials = [
        new three_1.PointsMaterial({ color: 0x555555, size: 2, sizeAttenuation: false }),
        new three_1.PointsMaterial({ color: 0x555555, size: 1, sizeAttenuation: false }),
        new three_1.PointsMaterial({ color: 0x333333, size: 2, sizeAttenuation: false }),
        new three_1.PointsMaterial({ color: 0x3a3a3a, size: 1, sizeAttenuation: false }),
        new three_1.PointsMaterial({ color: 0x1a1a1a, size: 2, sizeAttenuation: false }),
        new three_1.PointsMaterial({ color: 0x1a1a1a, size: 1, sizeAttenuation: false }),
    ];
    for (i = 10; i < 30; i++) {
        var stars = new three_1.Points(starsGeometry, starsMaterials[i % 6]);
        stars.rotation.x = Math.random() * 6;
        stars.rotation.y = Math.random() * 6;
        stars.rotation.z = Math.random() * 6;
        stars.scale.setScalar(i * 10);
        stars.matrixAutoUpdate = false;
        stars.updateMatrix();
        scene.add(stars);
    }
}
function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.x += 0.00005;
    sphere.rotation.y += 0.0001;
    renderer.render(scene, camera);
}
