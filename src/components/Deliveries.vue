<template>
    <q-card class="sales">
      <q-card-section>
        <q-table
          title="Recent Deliveries"
          :data="recentOrder.recentOrdersData"
          :columns="recentOrder.recentOrdersColumns"
          row-key="name" hide-bottom flat
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
                  {{ props.row.quantity }}
                </q-badge>
              </q-td>
              <q-td key="fat" :props="props">
                <q-badge color="purple">
                  {{ props.row.customer_name }}
                </q-badge>
              </q-td>
              <q-td key="carbs" :props="props">
                <q-badge color="orange">
                  {{ props.row.location }}
                </q-badge>
              </q-td>
              <q-td key="protein" :props="props">
                <q-badge color="primary">
                  {{ props.row.payment_type }}
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
.sales::-webkit-keygen-select{
  background: red;
}
</style>
