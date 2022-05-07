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

} ); 

	ROTATING SQUARE

*/ 

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

const scene = new THREE.Scene();

const material = new THREE.LineBasicMaterial( { color: 0xbb00ff } );

const points = [];

points.push( new THREE.Vector3( 0, 0, 5 ) );
points.push( new THREE.Vector3( -10, 0, 0 ) );
points.push( new THREE.Vector3( 0, -15, 0 ) );
points.push( new THREE.Vector3( 0, 0, 5 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, -15, 0 ) );
points.push( new THREE.Vector3( 0, 0, -5 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 15, 0 ) );
points.push( new THREE.Vector3( 0, 0, -5 ) );
points.push( new THREE.Vector3( -10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 15, 0 ) );
points.push( new THREE.Vector3( 0, 0, 5 ) ); 



const geometry = new THREE.BufferGeometry().setFromPoints( points );

const line = new THREE.Line( geometry, material );

scene.add( line );

/* function animate() {
	requestAnimationFrame( animate );
    //line.rotation.x += 0.01;
    //line.rotation.y += 0.01;

	renderer.render( scene, camera );
} */



window.addEventListener("mousemove", function(e){
	
	line.rotation.y += e.clientX / 10000
	line.rotation.x -= e.clientY / 10000
	renderer.render( scene, camera );
}) 

renderer.render( scene, camera );
animate(); 


//# sourceMappingURL=index.js.map
