<template>
    <q-card class="sales">
      <q-card-section>
        <q-table
          title="Recent Orders"
          :data="recentOrder.data"
          :columns="recentOrder.columns"
          row-key="name" hide-bottom
        >
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="Image" :props="props">
                <q-avatar color="green">
                  <q-img :src="props.row.image" de/>
                </q-avatar>
              </q-td>
              <q-td key="name" :props="props">
                {{ props.row.name }}
              </q-td>
              <q-td key="calories" :props="props">
                <q-badge color="green">
                  {{ props.row.calories }}
                </q-badge>
              </q-td>
              <q-td key="fat" :props="props">
                <q-badge color="purple">
                  {{ props.row.fat }}
                </q-badge>
              </q-td>
              <q-td key="carbs" :props="props">
                <q-badge color="orange">
                  {{ props.row.carbs }}
                </q-badge>
              </q-td>
              <q-td key="protein" :props="props">
                <q-badge color="primary">
                  {{ props.row.protein }}
                </q-badge>
              </q-td>
              <q-td key="sodium" :props="props">
                <q-badge color="teal">
                  {{ props.row.sodium }}
                </q-badge>
              </q-td>
              <q-td key="calcium" :props="props">
                <q-badge color="accent">
                  {{ props.row.calcium }}
                </q-badge>
              </q-td>
              <q-td key="iron" :props="props">
                <q-badge color="amber">
                  {{ props.row.iron }}
                </q-badge>
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </q-card-section>
    </q-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { RecentOrders } from "src/utils/RecentOrders";

@Component
export default class ClassComponent extends Vue {
  recentOrder: RecentOrders = new RecentOrders()
}
</script>
<style lang="scss" scoped>
</style>
