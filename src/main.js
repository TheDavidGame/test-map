import Vue from 'vue'
import App from './App.vue'
import YmapPlugin from 'vue-yandex-maps'

const settings = {
  apiKey: '511aae3a-fcb6-4058-b3ce-09c1cfe0202e',
  lang: 'ru_RU',
  coordorder: 'latlong',
  enterprise: false,
  version: '2.1'
}

Vue.use(YmapPlugin, settings)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


