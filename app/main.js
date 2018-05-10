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

const COLORS = ['#D92B6A', '#9564F2', '#FFCF59']

class Main extends Component {
  constructor() {
    super()
    this.state = { color: 'red' }
  }

  changeColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue']
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    })
  }

  render() {
    return (
      <Scene>
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
