var renderer;
var wmtsMap;

var wmtsCapabilities = "";
var wmtsHost, wmtsLayer;

import * as ol from 'openlayers';


function getCapabilities(url){

    const parser = new ol.format.WMTSCapabilities();
    return fetch(url, { responseType: 'text' })
        .then( response => {
            return parser.read(response.body);
        });
}

AFRAME.registerComponent('wmtssphere', {
    schema: {},


    animate: function () {

        if(wmtsCapabilities === '') {
            getCapabilities(wmtsHost).then(capabilities => {
                wmtsCapabilities = capabilities;
                console.log("WMTS:", wmtsCapabilities);
            });
        }


    },

    init: function() {

        /* Rendering variables */
        const scene = document.querySelector('a-scene');
        const obj = this.el.getObject3D('mesh');

        /* WMTS variables */
        wmtsHost = this.data.host;
        wmtsLayer = this.data.layer;

        const textureLoader = new THREE.TextureLoader();
        wmtsMap = textureLoader.load( '../img/world.jpg', this.animate );

        scene.addEventListener('render-target-loaded', function () {

            renderer = scene.renderer;
            obj.material = new THREE.MeshPhongMaterial({
                map: wmtsMap
            });
        });


    },

    update: function() {
        // Get the ref of the object to which the component is attached
        const obj = this.el.getObject3D('mesh')
    }
})
