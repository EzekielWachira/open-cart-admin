<template>
    <q-card class="text-white">
      <q-card-section>
        <canvas id="doug"/>
      </q-card-section>
    </q-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import Chart from 'chart.js'
import VueApexCharts from 'vue-apexcharts'

@Component
export default class ClassComponent extends Vue {
  @Prop(Boolean) readonly active!: boolean;
  @Prop({ default: [] }) readonly labels!: Array<string>
  @Prop({ default: [] }) readonly colors!: Array<string>
  @Prop({ default: [] }) readonly data!: Array<number>
  @Prop({ default: 'bar' }) readonly chartType!: string
  @Prop({
    default: () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return Chart.defaults.dougnut
    }
  })
  // eslint-disable-next-line @typescript-eslint/ban-types
  readonly options: object | undefined

  mounted () {
    this.createChart({
      datasets: [
        {
          data: this.data,
          backgroundColor: this.colors
        }
      ],
      labels: this.labels
    })
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  private createChart (data: object) {
    const canvas = document.getElementById('doug') as HTMLCanvasElement
    const options = {
      type: this.chartType,
      data: data,
      options: this.options
    }
    return new Chart(canvas, options)
  }
}
</script>
<style lang="scss" scoped>
</style>
