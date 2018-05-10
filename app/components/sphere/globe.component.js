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
                    host: 'https://proba-v-mep.esa.int/applications/geo-viewer/app/mapcache/wmts?service=WMTS&request=GetCapabilities',
                    layer: 'PROBAV_S10_TOC_1KM_COLOR'
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
