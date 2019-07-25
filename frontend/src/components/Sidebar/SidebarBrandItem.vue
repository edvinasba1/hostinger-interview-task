<template>
  <div class="sidebar__brand-item">
    <font-awesome-icon
      icon="times"
      @click="() => isActive? setSidebarActive(!isActive) : null"
      class="sidebar__brand-item__close-button"
    />
    <img draggable="false" src="@/assets/image/logo.svg" alt="Company logo" />
  </div>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      required: true
    },
    setSidebarActive: {
      type: Function,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";

.sidebar__brand-item {
  position: sticky;
  top: $zero-rem;
  height: $sidebar-brand-item-height;
  line-height: $sidebar-brand-item-height;
  text-align: $align-center;
  background-color: $purple;

  .sidebar__brand-item__close-button {
    position: absolute;
    top: $zero-rem;
    left: $zero-rem;
    height: $sidebar-brand-item-height;
    vertical-align: middle;
    padding: $zero-rem $rem;
    color: $light-gray;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    @include hover {
      color: $white;
    }
  }

  img {
    vertical-align: $v-align-middle;
  }
}
</style>
