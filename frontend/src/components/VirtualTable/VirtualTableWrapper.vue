<template>
  <transition name='fade'>
    <div v-if="items.length > 0" class="virtual-table">
        <slot />
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";

.virtual-table {
  min-height: 100%;
  width: 100%;
  box-shadow: $default-shadow;
  user-select: none;
  position: relative;
  overflow-y: hidden;
}
</style>
