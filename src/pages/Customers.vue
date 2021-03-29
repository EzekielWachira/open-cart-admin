<template>
  <q-page>
    <div class="q-pa-md">
      <q-table
        title="Customers"
        :data="customerData"
        :columns="columns"
        row-key="name">
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="name" :props="props">{{ props.row.name }}</q-td>
            <q-td key="email" :props="props">{{ props.row.email }}</q-td>
            <q-td key="location" :props="props">{{ props.row.location }}</q-td>
            <q-td key="productsBought" :props="props">{{ props.row.productsBought }}</q-td>
            <q-td key="totalAmountPaid" :props="props">&dollar;{{ props.row.totalAmountPaid }}</q-td>
            <q-td key="balance" :props="props">&dollar;{{ props.row.balance }}</q-td>
            <q-td key="deliveryStatus" :props="props">
              <q-badge outline :color="props.row.deliveryStatus === 'done' ? 'positive' : 'orange'">
                {{ props.row.deliveryStatus }}
              </q-badge>
            </q-td>
          </q-tr>
        </template>
        <template v-slot:top-right>
          <q-btn label="Export to csv" class="q-mr-md"
                 icon-right="mdi-download-box-outline" outline color="positive"/>
          <q-input placeholder="Search..." outlined color="positive" dense>
            <template v-slot:prepend>
              <q-icon name="search"/>
            </template>
          </q-input>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script lang="ts">

import {Component, Vue} from "vue-property-decorator";
import customers from "src/utils/Customers";
import columns from "src/utils/CustomerColumns";
import {Action, Getter} from "vuex-class";

@Component
export default class Settings extends Vue {
  private customerData = customers
  private columns = columns

  @Getter('authModule/getAllUsers') users : any
  @Action('authModule/getAllUsers') getAllUsers : any

  private created() {
    this.getAllUsers()
  }

  private mounted(){
    console.log(this.users)
  }

}

</script>

<style scoped>

</style>
