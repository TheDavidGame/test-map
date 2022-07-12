<template>
  <div id="app">
    <button v-for="n in markers" :key="n.id" @click="onClick(n)">
      #{{ n.id }}
    </button>
    <yandex-map
      ref="map"
      :coords="[55.72, 37.65]"
      zoom="10"
      style="width: 100%; height: 600px"
    >
      <ymap-marker
        v-for="n in markers"
        :key="n.id"
        :marker-id="n.id"
        marker-type="placemark"
        :icon="{
          layout: 'default#image',
          imageHref:
            'https://i.pinimg.com/originals/5e/6f/58/5e6f5850a76955d87f4ec9134ba6c05b.jpg',
          imageSize: [40, 40],
          imageOffset: [-15, -35],
        }"
        :coords="n.coord"
        :balloon="{ body: n.text }"
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
      trains: [],
      markers: [
        { coord: [55.8, 37.4], text: "opa" },
        { coord: [55.6, 37.5], text: "opa" },
        { coord: [55.7, 37.7], text: "opa" },
      ].map((n, i) => ({ ...n, id: i + 1 })),
    };
  },
  methods: {
    onClick(m) {
      this.$refs.map.myMap.balloon.open(m.coord, m.text);
    },
  },
  mounted() {
    console.log(json);
    for (let key in json) {
      this.trains.push(json[key]);
    }
    console.log(this.trains);
  },
};
</script>

<style></style>
