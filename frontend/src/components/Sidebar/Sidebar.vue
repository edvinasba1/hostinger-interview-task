<template>
  <sidebar-wrapper :isActive="isActive">
    <sidebar-brand-item :isActive="isActive" :setSidebarActive="setSidebarActive"/>
    <sidebar-item
      v-for="item in items"
      :key="item.key"
      :icon="item.icon"
      :to="item.to"
      :title="item.title"
    />
  </sidebar-wrapper>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import SidebarWrapper from "./SidebarWrapper.vue";
import SidebarBrandItem from "./SidebarBrandItem.vue";
import SidebarItem from "./SidebarItem.vue";

let components = {
  SidebarWrapper,
  SidebarBrandItem,
  SidebarItem
};

export default {
  components: {
    ...components
  },
  computed: {
    ...mapGetters({
      isActive: "sidebar/isActive",
      items: "routes/items",
    })
  },
  methods: {
    ...mapActions({
      setSidebarActive: "sidebar/setSidebarActive",
    })
  },
  watch: {
    // Automatically close sidebar if route is changing & sidebar is active.
    $route() {
      if (this.isActive) {
        this.setSidebarActive(!this.isActive);
      }
    }
  }
};
</script>