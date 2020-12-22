<template>
    <q-card class="sales">
      <q-card-section>
        Sales Analytics
      </q-card-section>
      <q-card-section>
        <weekly-sales />
      </q-card-section>
    </q-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import WeeklySales from "components/WeeklySales.vue";

@Component({
  components: { WeeklySales }
})
export default class ClassComponent extends Vue {
}
</script>
<style lang="scss" scoped>
</style>
