<template>
  <div id="app" v-if="isLoading">
    <yandex-map
      ref="map"
      :coords="[53.681, 85]"
      zoom="14"
      style="width: 100%; height: 600px"
    >
      <ymap-marker
        v-for="(n, i) in trains"
        :key="i"
        :marker-id="i"
        marker-type="placemark"
        :icon="{
          layout: 'default#image',
          imageHref:
            'https://i.pinimg.com/originals/5e/6f/58/5e6f5850a76955d87f4ec9134ba6c05b.jpg',
          imageSize: [40, 40],
          imageOffset: [-15, -35],
        }"
        :coords="[n.coordinates.latitude, n.coordinates.longitude]"
        :balloon="{ body: n.locotype + ' №' + n.loconumber }"
      ></ymap-marker>
    </yandex-map>
  </div>
</template>

<script>
import { yandexMap, ymapMarker } from "vue-yandex-maps";
import json from "./data/data.json";

export default {
  name: "App",
  components: {
    yandexMap,
    ymapMarker,
  },
  data() {
    return {
      isLoading: false,
      trains: [],
    };
  },
  mounted() {
    for (let key in json) {
      this.trains.push(json[key]);
    }
    this.isLoading = true;
  },
  methods: {
    onClick(m) {
      this.$refs.map.myMap.balloon.open(m.coord, m.text);
    },
  },
};
</script>

<style></style>
