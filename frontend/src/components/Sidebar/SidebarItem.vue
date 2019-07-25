<template>
  <router-link draggable="false" :to="to" class="sidebar__router-link">
    <font-awesome-icon :icon="icon"/>
    {{ title }}
  </router-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";

.sidebar__router-link {
  display: block;
  text-decoration: none;
  color: inherit;
  padding: $rem;
  transition: all 0.3s ease-in-out;
  font-size: $font-size-big-screen;

  &.router-link-exact-active {
    background-color: darken(#ffffff, $heavy-darken);
    padding-left: $rem * 2;
    font-weight: $font-bold;
  }

  &:not(.router-link-exact-active) {
    @include hover {
      background-color: darken(#ffffff, $medium-darken);
    }
  }
}
</style>
