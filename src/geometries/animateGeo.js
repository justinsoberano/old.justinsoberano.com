import * as THREE from '/justinsoberano.com/node_modules/three/build/three.module.js';
import {cube, cube2, dodecahedron, tetrahedron, spinTop, gridMeshBottom} from '/justinsoberano.com/src/geometries/geometry.js';
import {scene, camera, renderer} from '/justinsoberano.com/src/renderer/render.js';
import {TWEEN} from '/justinsoberano.com/node_modules/three/examples/jsm/libs/tween.module.min.js';

let clock = new THREE.Clock();

new TWEEN.Tween(cube.position)
    .to({y: 1}, 2000)
    .easing(TWEEN.Easing.Cubic.Out)
    .yoyo(true)
    .start();
;

new TWEEN.Tween(cube.rotation)
    .to({ y: 3 * Math.PI }, 2000)
    .easing(TWEEN.Easing.Quadratic.InOut)
    .yoyo(true)
    .start();
;

new TWEEN.Tween(cube2.position)
    .to({y: 1}, 3000)
    .easing(TWEEN.Easing.Cubic.Out)
    .yoyo(true)
    .start();
;
new TWEEN.Tween(cube2.rotation)
    .to({ z: 3 * Math.PI }, 3000)
    .easing(TWEEN.Easing.Circular.InOut)
    .yoyo(true)
    .start();
;

new TWEEN.Tween(dodecahedron.position)
    .to({y: -2}, 3000)
    .easing(TWEEN.Easing.Cubic.Out)
    .yoyo(true)
    .start();
;
new TWEEN.Tween(dodecahedron.rotation)
    .to({ x: 3 * Math.PI }, 3000)
    .easing(TWEEN.Easing.Quadratic.InOut)
    .yoyo(true)
    .start();
;

new TWEEN.Tween(tetrahedron.position)
    .to({y: -1.5}, 3000)
    .easing(TWEEN.Easing.Back.Out)
    .yoyo(true)
    .start();
;
new TWEEN.Tween(tetrahedron.rotation)
    .to({ z: 3.2 * Math.PI }, 2000)
    .easing(TWEEN.Easing.Quadratic.InOut)
    .yoyo(true)
    .start();
;

new TWEEN.Tween(spinTop.position)
    .to({y: 3}, 2500)
    .easing(TWEEN.Easing.Cubic.Out)
    .yoyo(true)
    .start();
;
new TWEEN.Tween(spinTop.rotation)
    .to({ y: 3 * Math.PI }, 2500)
    .easing(TWEEN.Easing.Circular.InOut)
    .yoyo(true)
    .start();
;


function animateShapes() {

    let time = clock.getElapsedTime();
    
    cube.rotation.x += 0.01; cube.rotation.y += 0.02; cube.rotation.z += 0.02;
    cube2.rotation.x += 0.01; cube2.rotation.y += 0.01; cube2.rotation.z += 0.03;
    dodecahedron.rotation.x += 0.01; dodecahedron.rotation.y += 0.01; dodecahedron.rotation.z += 0.01;
    tetrahedron.rotation.x += 0.04; tetrahedron.rotation.y += 0.007; tetrahedron.rotation.z += 0.01;
    spinTop.rotation.x += 0.02; spinTop.rotation.y += 0.01; spinTop.rotation.z += 0.02;

    gridMeshBottom.position.y = Math.sin(time) * 0.1 - 3;
    gridMeshBottom.position.z += 0.01;
    gridMeshBottom.position.x += 0.01;

    TWEEN.update();

    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animateShapes);

export {clock};