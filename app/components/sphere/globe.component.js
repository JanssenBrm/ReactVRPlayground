import { h, Component } from 'preact'
import { Entity, Scene } from 'aframe-react'


class Globe extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Entity
                wmtssphere={{
                    color: '#36d900'
                }}
                primitive="a-sphere"
                radius={3}
                position={{ x: 0.0, y: 5, z: -10.0 }}
                color="#FAFAF1"
            />

        )
    }
}

export default Globe
