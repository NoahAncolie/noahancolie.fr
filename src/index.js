/*import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

const scene = new THREE.Scene();

const loader = new GLTFLoader();

loader.load( 'assets/images/Avocado.glb', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} ); */ var $62aa149e62a59d75$var$renderer = new THREE.WebGLRenderer();
$62aa149e62a59d75$var$renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild($62aa149e62a59d75$var$renderer.domElement);
var $62aa149e62a59d75$var$camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
$62aa149e62a59d75$var$camera.position.set(0, 0, 100);
$62aa149e62a59d75$var$camera.lookAt(0, 0, 0);
var $62aa149e62a59d75$var$scene = new THREE.Scene();
var $62aa149e62a59d75$var$material = new THREE.LineBasicMaterial({
    color: 0x0000ff
});
var $62aa149e62a59d75$var$points = [];
$62aa149e62a59d75$var$points.push(new THREE.Vector3(-10, 0, 0));
$62aa149e62a59d75$var$points.push(new THREE.Vector3(0, 15, 0));
$62aa149e62a59d75$var$points.push(new THREE.Vector3(10, 0, 0));
$62aa149e62a59d75$var$points.push(new THREE.Vector3(10, 0, 0));
$62aa149e62a59d75$var$points.push(new THREE.Vector3(0, -15, 0));
$62aa149e62a59d75$var$points.push(new THREE.Vector3(-10, 0, 0));
$62aa149e62a59d75$var$points.push(new THREE.Vector3(-10, 0, 0));
$62aa149e62a59d75$var$points.push(new THREE.Vector3(0, 0, -5));
$62aa149e62a59d75$var$points.push(new THREE.Vector3(10, 0, 0));
$62aa149e62a59d75$var$points.push(new THREE.Vector3(10, 0, 0));
$62aa149e62a59d75$var$points.push(new THREE.Vector3(0, 0, 5));
$62aa149e62a59d75$var$points.push(new THREE.Vector3(-10, 0, 0));
$62aa149e62a59d75$var$points.push(new THREE.Vector3(0, -15, 0));
$62aa149e62a59d75$var$points.push(new THREE.Vector3(0, 0, -5));
$62aa149e62a59d75$var$points.push(new THREE.Vector3(0, 15, 0));
$62aa149e62a59d75$var$points.push(new THREE.Vector3(0, -15, 0));
$62aa149e62a59d75$var$points.push(new THREE.Vector3(0, 0, 5));
$62aa149e62a59d75$var$points.push(new THREE.Vector3(0, 15, 0));
var $62aa149e62a59d75$var$geometry = new THREE.BufferGeometry().setFromPoints($62aa149e62a59d75$var$points);
var $62aa149e62a59d75$var$line = new THREE.Line($62aa149e62a59d75$var$geometry, $62aa149e62a59d75$var$material);
$62aa149e62a59d75$var$scene.add($62aa149e62a59d75$var$line);
function $62aa149e62a59d75$var$animate() {
    requestAnimationFrame($62aa149e62a59d75$var$animate);
    $62aa149e62a59d75$var$line.rotation.x += 0.01;
    $62aa149e62a59d75$var$line.rotation.y += 0.01;
    $62aa149e62a59d75$var$renderer.render($62aa149e62a59d75$var$scene, $62aa149e62a59d75$var$camera);
}
$62aa149e62a59d75$var$renderer.render($62aa149e62a59d75$var$scene, $62aa149e62a59d75$var$camera);
$62aa149e62a59d75$var$animate();


//# sourceMappingURL=index.js.map
