<template>
  <li class="appbar__brand-item">
    <div class="appbar__brand-item__logo">
      <img draggable="false" src="@/assets/image/logo.svg" alt="Company logo" />
    </div>
  </li>
</template>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";

.appbar__brand-item {
  display: inline-block;
  padding: $zero-rem;
  margin: $zero-rem;

  .appbar__brand-item__logo {
    height: $appbar-height;
    line-height: $appbar-height;
    padding: $zero-rem $rem;

    img {
      vertical-align: $v-align-middle;
    }
  }
}
</style>
