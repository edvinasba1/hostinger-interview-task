<template>
  <transition-group name="fade" tag="ul" class="selected-item">
    <li
      v-for="(key, index) in getSelectedObjectKeys()"
      :key="`${key}-${index}`"
      :class="{'selected-item__content': true, 'active': selectedItem.column === selectedItem.item[key]}"
    >{{ `${selectedItem.item[key]}`}}</li>
    <li
      v-if="getSelectedObjectKeys().length === 0"
      class="selected-item__info"
      key="selected-item__info"
    >
      <font-awesome-icon icon="exclamation" class="selected-item__info__icon" />There is no item selected.
    </li>
  </transition-group>
</template>

<script>
export default {
  props: {
    selectedItem: {
      type: Object,
      required: true
    }
  },
  methods: {
    getSelectedObjectKeys() {
      return Object.keys(this.selectedItem.item).filter((_, i) => i > 0);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";

.selected-item {
  display: flex;
  justify-content: space-between;
  align-content: $align-center;
  margin: $zero-rem;
  padding: $zero-rem;
  list-style: none;
  font-size: $font-size-big-screen;

  @include for-smaller-screens {
      font-size: $font-size-small-screen;
  }

  .selected-item__content {
    &.active {
      font-weight: $font-bold;
    }
  }

  .selected-item__info {
    .selected-item__info__icon {
      padding-right: $half-rem;
    }
  }
}
</style>
