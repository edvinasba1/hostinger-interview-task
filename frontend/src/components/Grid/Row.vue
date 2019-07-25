<template>
  <article class="grid__row">
    <slot />
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";

.grid__row {
  display: flex;
  justify-content: space-between;

  &:first-child:last-child {
    padding: $rem;
  }

  &:first-child {
    padding: $rem $rem $half-rem $rem;
  }

  &:last-child {
    padding: $half-rem $rem $rem $rem;
  }

  &:not(:first-child):not(:last-child) {
    padding: $half-rem $rem $half-rem $rem;
  }
}

@include for-smaller-screens {
  .grid__row {
    display: block;
  }
}
</style>
