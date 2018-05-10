import { h, Component } from 'preact'
import { Entity, Scene } from 'aframe-react'


class Camera extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Entity primitive="a-camera">
                <Entity
                    primitive="a-cursor"
                    animation__click={{
                        property: 'scale',
                        startEvents: 'click',
                        from: '0.1 0.1 0.1',
                        to: '1 1 1',
                        dur: 150
                    }}
                />
            </Entity>
        )
    }
}

export default Camera
