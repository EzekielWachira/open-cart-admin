<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-white">
      <q-toolbar class="q-gutter-x-sm text-blue-grey-9">
        <q-btn
          flat
          dense
          icon="menu" style="box-shadow: -3px -3px 7px #ffffff73, 3px 3px 5px rgba(94, 104, 121, .288)"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-input dense outlined placeholder="Search..." color="positive"
                 style="box-shadow: -3px -3px 7px #ffffff73, 3px 3px 5px rgba(94, 104, 121, .288);">
          <template v-slot:append>
            <q-icon name="search"/>
          </template>
        </q-input>
        <q-space/>
        <q-btn icon="notifications" dense flat
               style="box-shadow: -3px -3px 7px #ffffff73, 3px 3px 5px rgba(94, 104, 121, .288);"
        />
        <q-btn icon="message" dense
               flat style="box-shadow: -3px -3px 7px #ffffff73, 3px 3px 5px rgba(94, 104, 121, .288);"
        />
        <q-toggle v-model="toggle" icon="mdi-brightness-4" icon-color="blue-grey-9" @toggle="this.$q.dark.isActive = !this.$q.dark.isActive"/>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-blue-grey-9"
      :width="260"
      dark
    >
      <div class="text-center q-py-lg">
        <div class="text-h5">OpenCart Admin</div>
      </div>
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          <q-breadcrumbs active-color="positive" separator-color="grey-5">
            <q-breadcrumbs-el label="Dashboard" icon="mdi-view-dashboard-outline" />
            <q-breadcrumbs-el label="Components" icon="widgets" />
          </q-breadcrumbs>
        </q-item-label>
        <q-item v-for="link in essentialLinks" :key="link.title"
          clickable
          :to="link.linkTo"
        >
          <q-item-section
            v-if="link.icon"
            avatar
          >
            <q-icon :name="link.icon" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ link.title }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <div class="row absolute-bottom justify-between q-px-lg q-py-md">
        <q-btn icon="person" color="blue-grey-6" dense/>
        <q-btn icon="settings" color="blue-grey-8" dense/>
        <q-btn icon="mdi-exit-run" color="red" dense/>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue'
import { Vue, Component } from 'vue-property-decorator'
import links from 'src/utils/Links'

@Component({
  components: { EssentialLink }
})
export default class MainLayout extends Vue {
  leftDrawerOpen = false;
  essentialLinks = links;
  toggle = false
}
</script>
<style lang="scss" scoped>
.q-item.q-router-link--active{
  background: #37474f;
  box-shadow: -3px -3px 7px #455a64, 3px 3px 5px rgba(94, 104, 121, .288);
  color: #21BA45;
}
.neumorphism-outer{
  background: red;
  box-shadow: -3px -3px 7px #ffffff73, 3px 3px 5px rgba(94, 104, 121, .288)
}
.neumorphism-inner{
  box-shadow: inset -3px -3px 7px #ffffff73, inset 3px 3px 5px rgba(94, 104, 121, .288);
}
.neumorphism-ring{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  box-shadow: -3px -3px 7px #ffffff73, 3px 3px 5px rgba(94, 104, 121, .288);
  position: relative;
}
.neumorphism-ring:after{
  content: '';
  position: absolute;
  height: 80%;
  width: 80%;
  border-radius: 50%;
  box-shadow: inset -3px -3px 7px #ffffff73, inset 3px 3px 5px rgba(94, 104, 121, .288);
}
</style>
