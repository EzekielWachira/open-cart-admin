<template>
  <q-page>
<!--    <example-component-->
<!--      :active="true"-->
<!--      :data="[25, 75, 30]"-->
<!--      :labels="['Red', 'Green', 'Blue']"-->
<!--      :colors="['red', 'green', 'blue']"-->
<!--    ></example-component>-->
    <div class="q-pa-md">
      <div class="row">
        <div class="col-12 col-md-3 col-sm-6 q-px-sm q-py-sm">
          <q-card>
            <q-card-section>
              Hello
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-3 col-sm-6 q-px-sm q-py-sm">
          <q-card>
            <q-card-section>
              Hello
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-3 col-sm-6 q-px-sm q-py-sm">
          <q-card>
            <q-card-section>
              Hello
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-3 col-sm-6 q-px-sm q-py-sm">
          <q-card>
            <q-card-section>
              Hello
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import ExampleComponent from 'components/ClassComponent.vue'
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: { ExampleComponent }
})
export default class PageIndex extends Vue {
}
</script>
