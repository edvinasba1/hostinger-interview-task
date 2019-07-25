<template>
  <div>
    <appbar />
    <sidebar />
    <grid>
      <transition name="route-fade" mode="out-in">
        <router-view />
      </transition>
    </grid>
  </div>
</template>

<script>
import { 
  Appbar,
  Grid,
  Sidebar,
} from '@/components'

let components = {
  Grid,
  Appbar,
  Sidebar,
}

export default {
  components: {
    ...components
  }
}

</script>

<style lang="scss">
@import "@/assets/style/main.scss";
</style>
