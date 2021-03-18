import Vue from 'vue'
import DataTable from './DataTable.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(DataTable),
}).$mount('#app')
