<template>
  <div class="q-pa-md" >
    <div class="row q-gutter-y-md">
      <div class="col-12 col-md-6 col-sm-12 q-px-xs">
        <product-sale-analytics title="Product Sales Analytics" />
      </div>
      <div class="col-12 col-md-6 col-sm-12 q-px-xs">
        <product-sale-analytics title="Product Sales Analytics" />
      </div>
      <div class="col-12 col-md-4 col-sm-5 q-px-xs">
        <sales-summary title="Product Sales Analytics" />
      </div>
      <div class="col-12 col-md-8 col-sm-7 q-px-xs">
        <product-sale-analytics title="Product Sales Analytics" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import Component from "vue-class-component";
import { Vue } from "vue-property-decorator";
import SalesAnalytics from "components/SalesAnalytics.vue";
import ProductSaleAnalytics from "components/ProductSaleAnalytics.vue";
import SalesSummary from "components/SalesSummary.vue";

@Component({
  components: {
    ProductSaleAnalytics,
    SalesSummary
  }
})
export default class Sales extends Vue{}
</script>

<style scoped>

</style>
