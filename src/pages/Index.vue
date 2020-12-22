<template>
  <q-page>
    <div class="q-pa-md">
      <div class="row">
        <div class="col-12 col-md-3 col-sm-6 q-px-xs q-py-sm">
          <Sales2 />
        </div>
        <div class="col-12 col-md-3 col-sm-6 q-px-xs q-py-sm">
          <orders/>
        </div>
        <div class="col-12 col-md-3 col-sm-6 q-px-xs q-py-sm">
          <product />
        </div>
        <div class="col-12 col-md-3 col-sm-6 q-px-xs q-py-sm">
          <customer />
        </div>
      </div>
      <div class="row q-mt-lg q-gutter-y-xs">
        <div class="col-12 col-md-8 col-sm-12 q-px-xs">
          <sales-analytics />
        </div>
        <div class="col-12 col-md-4 col-sm-12 q-px-xs column">
          <div>
            <top-sellling-product />
          </div>
        </div>
      </div>
      <div class="row q-mt-lg q-gutter-y-xs">
        <div class="col-12 col-md-6 col-sm-6 q-px-xs">
          <recent-orders />
        </div>
        <div class="col-12 col-md-6 col-sm-6 q-px-xs"></div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import ExampleComponent from 'components/ClassComponent.vue'
import { Vue, Component } from 'vue-property-decorator'
// import {openURL} from 'quasar'
import Sales from 'components/Sales.vue'
import WeeklySales from 'components/WeeklySales.vue'
import Sales2 from 'components/Sales2.vue'
import Orders from 'components/Orders.vue'
import Product from 'components/Products.vue'
import Customer from 'components/Customer.vue'
import SalesAnalytics from "components/SalesAnalytics.vue"
import TopSelllingProduct from "components/TopSelllingProduct.vue";
import RecentOrders from "components/RecentOrders.vue";
import { pathToFileURL } from 'url'

@Component({
  components: { Sales, WeeklySales, Sales2, Orders, Product, Customer, SalesAnalytics,
  TopSelllingProduct, RecentOrders }
})
export default class PageIndex extends Vue {
  // url = openURL('../meee.mkv')
}
</script>
<style lang="scss" scoped>
.chartjs-render-monitor{
  color: white !important;
}
</style>
