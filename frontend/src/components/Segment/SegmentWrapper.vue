<template>
  <article class="segment">
      <slot />
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";

.segment {
    box-shadow: $default-shadow;
}
</style>
