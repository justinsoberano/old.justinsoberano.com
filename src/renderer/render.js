import * as THREE from '/node_modules/three/build/three.module.js';

let scene, camera, renderer;

renderer = new THREE.WebGLRenderer({antialias: true,});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000);
renderer.shadowMap.enabled = true;
console.log(window.devicePixelRatio);

renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', function() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix(); 
});

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(-6, 2, -6);
camera.rotation.set(-0.32, 0.76, 0.225);

export {scene, camera, renderer};
