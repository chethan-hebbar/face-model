function main(){
  // creating the camera
  var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 0, 200);

  // creating the renderer and inserting it into the html file
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // creating the scene
  var scene = new THREE.Scene();
  var ambientLight = new THREE.ambientLight(0x404040);
  scene.add(ambientLight);

  // loading the model 
  var loader = new THREE.OBJLoader();
  loader.addEventListener('load', function (event){
    scene.add(event.content);
});

loader.load('/IronMan/IronMan.obj');
renderer.render(scene, camera);

}

main();