<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-white">
      <q-toolbar class="q-gutter-x-sm text-blue-grey-9">
        <q-btn
          flat
          dense
          icon="mdi-backburger" style="box-shadow: -3px -3px 7px #ffffff73, 3px 3px 5px rgba(94, 104, 121, .288)"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
          :class="{ 'rotate': leftDrawerOpen }"
        />
        <q-input dense outlined placeholder="Search..." color="positive">
          <template v-slot:append>
            <q-icon name="search"/>
          </template>
        </q-input>
        <q-space/>
        <q-btn icon="notifications" dense flat push
               style="box-shadow: -3px -3px 7px #ffffff73, 3px 3px 5px rgba(94, 104, 121, .288);"
        >
          <q-badge color="transparent" floating>
            <q-icon name="mdi-alert-decagram" size="16px" color="red"></q-icon>
          </q-badge>
        </q-btn>
        <q-btn icon="message" dense
               flat style="box-shadow: -3px -3px 7px #ffffff73, 3px 3px 5px rgba(94, 104, 121, .288);"
        />
        <q-btn-dropdown
          icon="person"
          dense flat
          style="box-shadow: -3px -3px 7px #ffffff73, 3px 3px 5px rgba(94, 104, 121, .288);"
        >
          <div class="row no-wrap q-pa-md">
            <div class="column">
              <div class="text-h6 q-mb-md">Settings</div>
              <q-toggle v-model="toggle" label="Use Mobile Data" />
              <q-toggle v-model="toggle" label="Bluetooth" />
            </div>

            <q-separator vertical inset class="q-mx-lg" />

            <div class="column items-center">
              <q-avatar size="72px">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>

              <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

              <q-btn
                color="primary"
                label="Logout"
                push
                size="sm"
                v-close-popup
              />
            </div>
          </div>
        </q-btn-dropdown>
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
            <q-breadcrumbs-el label="Main" icon="widgets" />
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
      <div class="column absolute-right shadow-10 bg-white" style="height: 23%; top: 40%; z-index: 100">
        <q-btn flat color="primary" icon="facebook"></q-btn>
        <q-btn flat color="blue-6" icon="mdi-twitter"></q-btn>
        <q-btn flat color="blue-10" to="https://www.linkedin.com/in/ezekielwachira" target="_blank" tag="a" icon="mdi-linkedin"></q-btn>
        <q-toggle v-model="toggle" icon="mdi-brightness-4" icon-color="blue-grey-9" @toggle="this.$q.dark.isActive = !this.$q.dark.isActive"/>
      </div>
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
  box-shadow: 5px 5px 10px #29353a, -5px -5px 10px #455964;
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
.rotate{
  transform: rotate(-180deg) ;
  transition: .7s ease-in;
}
</style>
