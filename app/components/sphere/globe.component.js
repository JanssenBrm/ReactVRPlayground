import { h, Component } from 'preact'
import { Entity, Scene } from 'aframe-react'


class Globe extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Entity
                primitive="a-sphere"
                src="#earthTexture"
                height="1000"
                width="1000"
                animation__rotate={{
                    property: 'rotation',
                    dur: 20000,
                    loop: true,
                    to: '0 360 0'
                }}
                position={{ x: 0, y: 1, z: -3 }}
            />

        )
    }
}

export default Globe
