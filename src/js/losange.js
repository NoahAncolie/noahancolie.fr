const renderer = new THREE.WebGLRenderer( {alpha: true } );
const sceneDom = document.getElementById('scene')
renderer.setClearColor( 0x000000, 0 )
renderer.setSize( window.innerWidth, window.innerHeight );
sceneDom.appendChild( renderer.domElement );

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

function animate() {
	requestAnimationFrame( animate );
    line.rotation.x += 0.01;
    line.rotation.y += 0.01;

	renderer.render( scene, camera );
}

renderer.render( scene, camera );
animate(); 
