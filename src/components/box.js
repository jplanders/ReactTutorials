import React from 'react';
import ReactTHREE from 'react-three';
import THREE from 'three';

class BoxComponent extends React.Component {

  constructor(props) {

    super(props);

    this.displayName = 'BOX';

    // let loader = new THREE.JSONLoader();

    this.geometry = new THREE.BoxGeometry(1, 1, 1);
    this.material = new THREE.MeshBasicMaterial({
      color: 0x00ff00
    });

    // loader.load('/models/robby-robot/RobbyTheRobot_FanArt.js', (geometry, materials) => {
    //
    //     console.log('Loaded Robby robot', geometry, materials);
    //
    //     this.geometry = geometry;
    //     this.material = new THREE.MeshFaceMaterial( materials );
    //
    // });

  }

  render() {

    return React.createElement(ReactTHREE.Mesh, {
      geometry: this.geometry,
      material: this.material,
      position: this.props.position,
      quaternion: this.props.quaternion,
      visible: this.props.visible,
      scale: this.props.scale
    });

  }

}

BoxComponent.propTypes = {
  scale: React.PropTypes.number,
  position: React.PropTypes.instanceOf(THREE.Vector3),
  quaternion: React.PropTypes.instanceOf(THREE.Quaternion),
  visible: React.PropTypes.bool
};

export default BoxComponent;
