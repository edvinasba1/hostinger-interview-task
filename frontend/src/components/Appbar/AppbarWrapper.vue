<template>
  <transition name="fade">
    <nav v-if="isLoaded" class="appbar">
        <slot />
    </nav>
  </transition>
</template>

<script>
export default {
  data: () => {
    return {
      isLoaded: false,
    }
  },
  mounted() {
    this.isLoaded = true;
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";

.appbar {
  position: sticky;
  top: $zero-rem;
  height: $appbar-height;
  width: 100%;
  background-color: $purple;
  user-select: none;
  box-shadow: $default-shadow;
}
</style>