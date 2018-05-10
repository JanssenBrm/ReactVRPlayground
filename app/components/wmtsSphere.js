function animate() {
    console.log("aninmate");
}

/**
 * @fileoverview
 * This is our custom A-Frame component.
 * It is responsible for adding the outer wireframe mesh
 * and nodes to its vertices.
 */

AFRAME.registerComponent('wmtssphere', {
    schema: {},

    init: function() {

        const scene = document.querySelector('a-scene');
        const obj = this.el.getObject3D('mesh');



        const textureLoader = new THREE.TextureLoader();
        const wmtsMap = textureLoader.load( '../img/world.jpg', animate );

        scene.addEventListener('render-target-loaded', function () {

            console.log(scene.renderer);
            const wmsUrl = 'https://proba-v-mep.esa.int/applications/geo-viewer/app/geoserver/wms?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&LAYERS=PV_MEP:PROBAV_S1_TOC_1KM_BROWSE&FORMAT=image/png&TIME=2018-05-09&SRS=EPSG:4326&WIDTH=1168&HEIGHT=437&BBOX=17.69361937745073,52.01040202184683,18.85267699463823,52.44444654695573';
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
