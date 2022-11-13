
import BuildingSceneLayer from "@arcgis/core/layers/BuildingSceneLayer";
import DimensionLayer from "@arcgis/core/layers/DimensionLayer"

import MapImageLayer from "@arcgis/core/layers/MapImageLayer";

export default class Layer {
    constructor(type, url, id, options) {
        this.type = type
        this.url = url
        this.id = id
        this.options = options
    }
    createLayer(type, url) {
        var layer;
        switch (type) {
            case 'wms':

        }
        console.log(MapImageLayer)
        return layer
    }
}