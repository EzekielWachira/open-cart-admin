<template>
  <q-page>
    <div class="q-pa-md">
      <q-toolbar>
        <q-toolbar-title>Products</q-toolbar-title>
        <q-space />
        <q-btn icon-right="mdi-tag-plus" class="text-white q-mr-sm" label="New Category" style="background: #37474f" />
        <q-btn icon-right="mdi-playlist-plus" class="text-white" label="New Product" style="background: #37474f"/>
      </q-toolbar>
      <q-tabs
        v-model="tab"
        class="text-white q-mt-md"
        align="justify" dense style="background: #37474f"
        active-color="positive"
      >
        <q-route-tab name="clothes" icon="mdi-tshirt-crew-outline" label="Clothes" to="/products/clothes"/>
        <q-tab name="shoes" icon="mdi-shoe-cleat" label="Shoes" />
        <q-tab name="beauty" icon="mdi-face-shimmer-outline" label="Beauty" />
        <q-tab name="electronics" icon="mdi-television" label="Electronics" />
        <q-tab name="phones" icon="mdi-cellphone-android" label="Phones" />
        <q-tab name="laptops_computers" icon="mdi-laptop" label="Laptops & Computers" />
      </q-tabs>
      <div>
        <router-view />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import Component from "vue-class-component";
import { Vue } from "vue-property-decorator";

@Component
export default class Products extends Vue {
  private tab: string = 'clothes'
}
</script>

<style scoped>

</style>
