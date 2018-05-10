/**
 * @fileoverview 
 * This is our main A-Frame application.
 * It defines the main A-Frame Scene which gets mounted root div.
 */

import { h, Component } from 'preact'
import { Entity, Scene } from 'aframe-react'
import World from "./components/world/world.component";
import Camera from "./components/camera/camera.component";
import Globe from "./components/sphere/globe.component";

class Main extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Scene
          environment={{
              preset: 'forest',
              seed: 2,
              lightPosition: { x: 0.0, y: 0.03, z: -0.5 },
              fog: 0.8,
              grid: 'none'
          }}>
          <a-assets>
              <img crossOrigin id="groundTexture" src="img/floor.jpg" />
              <img crossOrigin id="skyTexture" src="img/sky.jpg" />
              <img crossOrigin id="earthTexture" src="img/world.jpg" />
          </a-assets>
          <World></World>
          <Globe></Globe>
          <Camera></Camera>
      </Scene>
    )
  }
}

export default Main
