var renderer;
var wmtsMap;

var wmtsCapabilities = "";
var wmtsOlLayer;
var wmtsHost, wmtsLayer;

var imgHeight = 1024;
var imgWidth =  2048;

import * as ol from 'openlayers';


function getCapabilities(url){

    const parser = new ol.format.WMTSCapabilities();
    return fetch(url, { responseType: 'text' })
        .then( response => {
            return response.text();
        })
        .then( response => {
            return parser.read(response);
        });
}

function getLayer(capabilities, layername){

    const sourceOptions = ol.source.WMTS.optionsFromCapabilities(capabilities, {
        layer: layername,
        matrixSet: 'EPSG:3857'
    });

    return new ol.source.TileImage((sourceOptions));


}


function generateTile(tileCoordinate){
   let url = wmtsOlLayer.getTileUrlFunction().call(wmtsOlLayer, tileCoordinate, ol.has.DEVICE_PIXEL_RATIO, 'EPSG:3857');

   url = url.replace('http://proba-v-mep.esa.int/mapcache', 'https://proba-v-mep.esa.int/applications/geo-viewer/app/mapcache');

   const textureLoader = new THREE.TextureLoader();
   const tileTexture = textureLoader.load( url);

   const position = new THREE.Vector2();

   position.x = 0;
   position.y = 0;

   renderer.copyTextureToTexture( position, tileTexture, wmtsMap );

   console.log(url);
}

AFRAME.registerComponent('wmtssphere', {
    schema: {},


    animate: function () {

        if(wmtsCapabilities === '') {
            getCapabilities(wmtsHost).then(capabilities => {
                wmtsCapabilities = capabilities;
                console.log("WMTS:", wmtsCapabilities);
                wmtsOlLayer = getLayer(wmtsCapabilities, wmtsLayer);

                wmtsOlLayer.getTileGrid().forEachTileCoord(ol.proj.transform([-180, -90, 180, 90], 'EPSG:4326', 'EPSG:3857'), 4, generateTile);
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
