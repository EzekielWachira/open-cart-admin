<template>
  <div class="q-pa-md">
    <div class="row q-gutter-y-xs">
        <div class="col-12 col-md-4 col-sm-6 q-gutter-y-xs q-px-xs"
             v-for="(item, index) in productItems" :key="index">
          <item :data="productItems[index]"/>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import product from "src/utils/Products";
import Item from "components/Item.vue";

@Component({
  components: {
    Item
  }
})
export default class Clothes extends Vue {
  private productItems: Array = product
  private thumbStyle = {
    right: '4px',
    borderRadius: '5px',
    backgroundColor: '#027be3',
    width: '5px',
    opacity: 0.75
  }

  private barStyle = {
    right: '2px',
    borderRadius: '9px',
    backgroundColor: '#027be3',
    width: '9px',
    opacity: 0.2
  }
}
</script>
