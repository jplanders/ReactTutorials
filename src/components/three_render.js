import React, { Component } from 'react';
import THREE from 'three';
import React3 from 'react-three-renderer';

export default class ThreeRender extends Component {
  constructor(props, context) {
    super(props, context);

    this.cameraPosition = new THREE.Vector3(0, 0, 5);

    this.state = {
      cubeRotation: new THREE.Euler(),
    };

    this._onAnimate = () => {
      this.setState({
        cubeRotation: new THREE.Euler(
          this.state.cubeRotation.x += 0.05 * (mouseY * .001 - this.state.cubeRotation.x),
          this.state.cubeRotation.y += 0.05 * (mouseX * .001 - this.state.cubeRotation.y),
          0
        )
      });
    };
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.onMouseMove);
  }

  onMouseMove(event) {
    console.log(event);
    mouseX = (event.clientX - window.innerWidth / 2);
    mouseY = (event.clientY - window.innerHeight / 2);
  }

  render() {
    const width = window.innerWidth / 2;
    const height = window.innerHeight / 2;
    const texture = new THREE.TextureLoader('/src/teddanson.jpg');

    return (
      <React3 mainCamera="camera"
      width={width}
      height={height}
      onAnimate={this._onAnimate}>
        <scene>
          <perspectiveCamera
      name="camera"
      fov={75}
      aspect={width / height}
      near={0.1}
      far={1000}

      position={this.cameraPosition}/>
    <pointLight
      position={this.cameraPosition}
      />
          <mesh
      rotation={this.state.cubeRotation}>
            <boxGeometry
      width={1}
      height={1}
      depth={0.05}/>
    <meshPhongMaterial
      color={0xfa6607}
      emissive={0x000000}
      specular={0xfe1a4c}
      shininess={10}
      metal={true}>
              <texture
      url='http://cdn.crownmediadev.com/dims4/default/2aae173/2147483647/crop/1992x1240%2B17%2B653/resize/514x320%5E/quality/90/?url=http%3A%2F%2Fcdn.crownmediadev.com%2F48%2F85%2F8d96e9dc4363a9467de361b728d0%2Fcast-danson.jpg'
      wrapS={ THREE.RepeatWrapping }
      wrapT={ THREE.RepeatWrapping } />
            </meshPhongMaterial>
          </mesh>
        </scene>
      </React3>
      );
  }
}

let mouseX = 0;
let mouseY = 0;
