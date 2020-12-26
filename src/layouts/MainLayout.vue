<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated
              :class="{'bg-blue-grey-9 text-white': $q.dark.isActive}"
    >
      <q-toolbar class="q-gutter-x-sm"
                 :class="{ 'text-white': $q.dark.isActive }"
      >
        <q-btn
          flat
          dense
          icon="mdi-backburger"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
          :class="$q.dark.isActive? 'dark-enabled-btn': 'dark-disabled-btn'"
        />
        <q-input dense outlined placeholder="Search..." color="positive">
          <template v-slot:append>
            <q-icon name="search"/>
          </template>
        </q-input>
        <q-space/>
        <q-btn :icon="$q.dark.isActive? 'light_mode': 'nights_stay'" dense
               flat @click="$q.dark.toggle()"
               :class="$q.dark.isActive? 'dark-enabled-btn': 'dark-disabled-btn'"
        />
        <q-btn icon="notifications" dense flat push
               :class="$q.dark.isActive? 'dark-enabled-btn': 'dark-disabled-btn'"
        >
          <q-badge color="transparent" floating>
            <q-icon name="mdi-alert-decagram" size="16px" color="red"></q-icon>
          </q-badge>
        </q-btn>
        <q-btn icon="message" dense
               flat
               :class="$q.dark.isActive? 'dark-enabled-btn': 'dark-disabled-btn'"
        />
        <q-btn-dropdown
          icon="person"
          dense flat
          :class="$q.dark.isActive? 'dark-enabled-btn': 'dark-disabled-btn'"
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
      <div class="row absolute-bottom justify-between q-px-lg q-py-md" style="bottom: 20px">
        <q-btn icon="person" dense flat style="background: #37474f; box-shadow: inset 5px 5px 10px #2b383e, inset -5px -5px 10px #435660;"/>
        <q-btn icon="settings" dense flat style="background: #37474f; box-shadow: inset 5px 5px 10px #2b383e, inset -5px -5px 10px #435660;"/>
        <q-btn icon="mdi-exit-run" style="background: #37474f; box-shadow: inset 5px 5px 10px #2b383e, inset -5px -5px 10px #435660;" dense flat/>
      </div>
      <div class="absolute-bottom text-center copy" style="font-size: 12px">
        &copy;{{ new Date().getFullYear() }} Ezekiel Wachira
      </div>
    </q-drawer>

    <q-page-container>
<!--      <div class="column absolute-right shadow-10 bg-white fixed-right"-->
<!--           style="height: 23%; top: 40%; z-index: 100"-->
<!--           :style="$q.dark.isActive? 'background-color: #ffffff': 'background-color: #37474f'"-->
<!--      >-->
<!--        <q-btn flat color="blue-8" icon="facebook"></q-btn>-->
<!--        <q-btn flat @click="$q.dark.toggle()" color="blue-6" icon="mdi-twitter"></q-btn>-->
<!--        <q-btn flat color="blue-10" to="https://www.linkedin.com/in/ezekielwachira" target="_blank" tag="a" icon="mdi-linkedin"></q-btn>-->
<!--        <q-toggle v-model="toggle" icon="mdi-brightness-4" icon-color="blue-grey-9"-->
<!--                  @toggle="$q.dark.toggle()"/>-->
<!--      </div>-->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue'
import {Vue, Component, Emit} from 'vue-property-decorator'
import links from 'src/utils/Links'
import {Action} from "vuex-class";

@Component({
  components: { EssentialLink }
})
export default class MainLayout extends Vue {
  leftDrawerOpen = false;
  essentialLinks = links;
  toggle = false

  // @Action('productModule/toggleDarkMode', $q.dark.isActive) getDarkThemeStatus: any

  // private configureAppTheme (): void {
  //   this.$q.dark.toggle()
  // }
}
</script>
<style lang="scss" scoped>
.q-item.q-router-link--active{
  background: #37474f;
  box-shadow: 5px 5px 10px #29353a, -5px -5px 10px #455964;
  color: #21BA45;
}
.dark-enabled-btn{
  box-shadow: 5px 5px 10px #29353a, -5px -5px 10px #455964;
}
.dark-disabled-btn{
  box-shadow: -3px -3px 7px #ffffff73, 3px 3px 5px rgba(94, 104, 121, .288);
  color: #37474f;
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
.copy{
  //transform: rotate(90deg);
}
</style>
