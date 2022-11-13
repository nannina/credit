<template>
  <div>
    <div id="viewDiv"></div>
  </div>
</template>
<script>
import Map from "@arcgis/core/Map";
import SceneView from "@arcgis/core/views/SceneView";
export default {
  name: "map",
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
      var mapView = new SceneView({
        map: map,
        container: "viewDiv",
        camera: {
          position: {
            x: -118.808,
            y: 33.961,
            z: 2000,
          },
          tilt: 75,
        },
      });
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

