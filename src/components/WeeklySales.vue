<template>
    <q-card class="text-white" flat>
      <q-card-section>
<!--        <apexchart width="280" type="donut" :options="options" :series="series"></apexchart>-->
        <apexchart type="bar" height="250" :options="chartOptions" :series="series" class="dark"></apexchart>
      </q-card-section>
    </q-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import Chart from 'chart.js'
import VueApexCharts from 'vue-apexcharts'
import apexchart from 'vue-apexcharts'

@Component({
  components: { apexchart, VueApexCharts }
})
export default class ClassComponent extends Vue {
  // eslint-disable-next-line @typescript-eslint/ban-types
  // readonly options: object | undefined
  private options: Object = {}
  // private series: number[] = [44, 55, 41, 17, 15]
  private isDarkThemeActivated (): boolean {
    if (this.$q.dark.isActive) {
      console.log('dark ttgheme is activated')
      return true
    } else {
      console.log('light themes activated')
      return false
    }
  }

  mounted () {
    this.isDarkThemeActivated()
  }

  updated () {
    this.isDarkThemeActivated()
  }

  private series = [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }, {
    name: 'Free Cash Flow',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  }]

  private chartOptions = {
    chart: {
      type: 'bar',
      height: 350,
      background: this.isDarkThemeActivated() ? '#37474f' : '#ffffff'
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
    },
    yaxis: {
      title: {
        text: '$ (thousands)'
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val: any) {
          return '$ ' + val + ' thousands'
        }
      }
    },
    theme: {
      mode: this.isDarkThemeActivated() ? 'dark' : 'light',
      palette: 'palette1',
      monochrome: {
        enabled: false,
        color: '#255aee',
        shadeTo: 'dark',
        shadeIntensity: 0.65
      }
    }
  }
}
</script>
<style lang="scss" scoped>
#SvgjsTspan4558{
  color: white;
}
</style>
