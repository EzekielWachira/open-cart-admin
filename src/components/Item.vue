<template>
  <q-card>
    <q-card-section>
      <q-img :src="data.image"/>
    </q-card-section>
    <q-card-section class="q-pt-none text-h6">
      {{ data.name }}
    </q-card-section>
    <q-card-section class="q-pt-none">
      {{ data.description }}
    </q-card-section>
    <q-card-section class="q-pt-none text-positive text-h6">&dollar;{{ data.price }}</q-card-section>
    <q-card-actions class="absolute-bottom-right">
      <q-btn icon="mdi-pencil-outline" dense flat
        :class="$q.dark.isActive? 'dark-enabled-btn': 'dark-disabled-btn'"
             :style="$q.dark.isActive? 'color: #ffffff': 'color: #37474f'"
      />
      <q-btn icon="mdi-delete-outline" class="text-red" dense flat
        :class="$q.dark.isActive? 'dark-enabled-btn': 'dark-disabled-btn'"
      />
    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import Component from "vue-class-component";
import  { Vue, Prop } from "vue-property-decorator"
import { Product } from "src/utils/Product";

@Component
export default class Item extends Vue{
  @Prop({ default: {} }) readonly data!: Object
}
</script>

<style scoped>
.dark-enabled-btn{
  box-shadow: 5px 5px 10px #29353a, -5px -5px 10px #455964;
}
.dark-disabled-btn{
  box-shadow: -3px -3px 7px #ffffff73, 3px 3px 5px rgba(94, 104, 121, .288);
  color: #37474f;
}
</style>
