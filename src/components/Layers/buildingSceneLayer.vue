<template>
  <div>
    <div id="viewDiv"></div>
  </div>
</template>
<script>
import Map from "@arcgis/core/Map";
import SceneView from "@arcgis/core/views/SceneView";
import BuildingSceneLayer from "@arcgis/core/layers/BuildingSceneLayer";
import BuildingFilter from "@arcgis/core/layers/support/BuildingFilter";
import Layer from "@/sdk/Layer";
export default {
  name: "buildingSceneLayer",
  data() {
    return {
      map: null,
      mapView: null,
    };
  },
  methods: {
    initMap() {
      var map = new Map({
        basemap: "hybrid",
      });
      var view = new SceneView({
        map: map,
        container: "viewDiv",
      });
      var buildingSceneLayer = new BuildingSceneLayer({
        url: "https://tiles.arcgis.com/tiles/V6ZHFr6zdgNZuVG0/arcgis/rest/services/BSL__4326__US_Redlands__EsriAdminBldg_PublicDemo/SceneServer",
      });
      map.add(buildingSceneLayer);
      buildingSceneLayer.when((layerView) => {
        view.extent = buildingSceneLayer.fullExtent;
      });
      console.log(buildingSceneLayer);
      //   buildingSceneLayer.when(() => {
      //     buildingSceneLayer.allSublayers.forEach((layer) => {
      //       switch (layer.modelName) {
      //         case "FullModel":
      //           layer.visible = true;
      //           break;
      //         case "Piping":
      //           layer.visible = true;
      //           break;
      //         case "Electrical":
      //           layer.visible = true;
      //           break;
      //         case "Architecturall":
      //           layer.visible = true;
      //           break;
      //         case "mechanical":
      //           layer.visible = true;
      //           break;
      //         default:
      //           layer.visible = true;
      //       }
      //     });
      //   });
      const buildingFilter = new BuildingFilter({
        filterBlocks: [
          {
            // an SQL expression that filters using the BldgLevel field
            filterExpression: "BldgLevel = 3",
          },
        ],
      });
      buildingSceneLayer.filters = [buildingFilter];
      buildingSceneLayer.activeFilterId = buildingFilter.id;
    },
  },
  mounted() {
    this.initMap();
  },
};
</script>
<style scoped>
@import "https://js.arcgis.com/4.25/@arcgis/core/assets/esri/themes/dark/main.css";
#viewDiv {
  height: 100vh;
  width: 100%;
}
</style>

