<template>
  <article class="grid__row__column">
    <slot />
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";

.grid__row__column {
  flex: 1;

  &:first-child {
    margin-right: $half-rem;
  }

  &:last-child {
    margin-left: $half-rem;
  }

  &:not(:first-child):not(:last-child) {
    margin-left: $half-rem;
    margin-right: $half-rem;
  }

  &:first-child:last-child {
    margin: $zero-rem;
  }
}

@include for-smaller-screens {
  .grid__row__column {
    display: block;

    &:not(:last-child) {
      margin-bottom: $rem;
    }

    &:first-child {
      margin-right: $zero-rem;
    }

    &:last-child {
      margin-left: $zero-rem;
    }

    &:not(:first-child):not(:last-child) {
      margin-left: $zero-rem;
      margin-right: $zero-rem;
    }
  }
}
</style>
