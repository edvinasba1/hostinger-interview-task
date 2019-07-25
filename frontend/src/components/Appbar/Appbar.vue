<template>
  <appbar-wrapper>
    <appbar-item-container>
      <appbar-menu-item :isActive="isActive" :setSidebarActive="setSidebarActive"/>
      <appbar-brand-item/>
      <appbar-item
        v-for="item in items"
        :key="item.key"
        :icon="item.icon"
        :to="item.to"
        :title="item.title"
      />
    </appbar-item-container>
  </appbar-wrapper>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import AppbarWrapper from "./AppbarWrapper.vue";
import AppbarItemContainer from "./AppbarItemContainer.vue";
import AppbarBrandItem from "./AppbarBrandItem.vue";
import AppbarItem from "./AppbarItem.vue";
import AppbarMenuItem from "./AppbarMenuItem";

let components = {
  AppbarWrapper,
  AppbarItemContainer,
  AppbarBrandItem,
  AppbarItem,
  AppbarMenuItem
};

export default {
  components: {
    ...components
  },
  computed: {
    ...mapGetters({
      isActive: "sidebar/isActive",
      items: "routes/items"
    })
  },
  methods: {
    ...mapActions({
      setSidebarActive: "sidebar/setSidebarActive"
    })
  }
};
</script>