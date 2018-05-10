import { h, Component } from 'preact'
import { Entity, Scene } from 'aframe-react'


class World extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Entity>
                <Entity primitive="a-light" type="ambient" color="#445451" />
                <Entity
                    primitive="a-light"
                    type="directional"
                    intensity="0.1"
                    position="2 4 4"
                />
            </Entity>
        )
    }
}

export default World
