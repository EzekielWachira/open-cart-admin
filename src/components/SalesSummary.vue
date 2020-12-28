<template>
    <q-card class="sales">
      <q-card-section class="text-h5">
        Sales Summary
      </q-card-section>
      <q-card-section>
        <q-list bordered separator class="rounded-borders">
          <q-item >
            <q-item-section avatar top>
              <q-avatar icon="mdi-tshirt-v-outline" color="orange-10" text-color="white" />
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1">Clothes</q-item-label>
<!--              <q-item-label caption>February 22nd, 2019</q-item-label>-->
            </q-item-section>

            <q-item-section side class="text-h5">
              &dollar;443.74
            </q-item-section>
          </q-item>
          <q-item >
            <q-item-section avatar top>
              <q-avatar icon="mdi-shoe-sneaker" color="positive" text-color="white" />
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1">Shoes</q-item-label>
<!--              <q-item-label caption>February 22nd, 2019</q-item-label>-->
            </q-item-section>

            <q-item-section side class="text-h5">
              &dollar;343.74
            </q-item-section>
          </q-item>
          <q-item >
            <q-item-section avatar top>
              <q-avatar icon="mdi-television" color="warning" text-color="white" />
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1">Electronics</q-item-label>
<!--              <q-item-label caption>February 22nd, 2019</q-item-label>-->
            </q-item-section>

            <q-item-section side class="text-h5">
              &dollar;309.32
            </q-item-section>
          </q-item>
          <q-item >
            <q-item-section avatar top>
              <q-avatar icon="mdi-laptop" color="blue" text-color="white" />
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1">Computers</q-item-label>
<!--              <q-item-label caption>February 22nd, 2019</q-item-label>-->
            </q-item-section>

            <q-item-section side class="text-h5">
              &dollar;776.79
            </q-item-section>
          </q-item>
          <q-item >
            <q-item-section avatar top>
              <q-avatar icon="mdi-face-shimmer-outline" color="accent" text-color="white" />
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1">Beauty Products</q-item-label>
<!--              <q-item-label caption>February 22nd, 2019</q-item-label>-->
            </q-item-section>

            <q-item-section side class="text-h5">
              &dollar;596.87
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import WeeklySales from "components/WeeklySales.vue";

@Component({
  components: { WeeklySales }
})
export default class SalesSummary extends Vue {
  @Prop({ default: 'Sales Analytics' }) readonly title!: string
}
</script>
<style lang="scss" scoped>
</style>
