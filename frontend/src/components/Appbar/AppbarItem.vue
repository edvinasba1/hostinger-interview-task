<template>
  <li class="appbar__item">
    <router-link draggable="false" :to="to" class="appbar__item__router-link">
      <font-awesome-icon class="appbar__item__router-link__icon" :icon="icon" />
      {{ title }}
    </router-link>
  </li>
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
      required: true,
    },
    title: {
      type: String,
      required: true,
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";

.appbar__item {
  display: inline-block;
  padding: $zero-rem;

  @include for-smaller-screens {
    display: none;
  }

  .appbar__item__router-link {
    display: block;
    text-decoration: none;
    padding: $zero-rem $rem;
    line-height: $appbar-height;
    color: $light-gray;
    cursor: pointer;
    transition: all .3s ease-in-out;

    &.router-link-exact-active {
      background-color: darken($purple, $medium-darken);
      font-weight: $font-bold;
      color: $white;
    }

    &:not(.router-link-exact-active) {
      @include hover {
        background-color: darken($purple, $light-darken);
        color: $white;
      }
    }

    .appbar__item__router-link__icon {
      padding-right: $half-rem;
    }
  }
}
</style>
