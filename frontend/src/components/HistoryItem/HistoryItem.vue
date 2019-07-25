<template>
  <transition-group name="fade" tag="ul" class="history-item">
    <ul
      v-for="({item, column}, index) in selectedItemHistory"
      :key="`${column}-${index}`"
      :class="{'history-item__content': true}"
    >
      <li
        v-for="(key, index) in getSelectedObjectKeys(item)"
        :key="`${key}-${index}`"
        :class="{'history-item__content__item': true, 'active': item[key] === column}"
      >{{ item[key] }}</li>
    </ul>
    <ul v-if="selectedItemHistory.length === 0" class="history-item__info" key="history-item__info">
        <font-awesome-icon icon="exclamation" class="history-item__info__icon" />
        There is no user selected field history.
    </ul>
  </transition-group>
</template>

<script>
import SelectedItem from "../SelectedItem/SelectedItem.vue";

let components = {
  SelectedItem
};

export default {
  components: {
    ...components
  },
  props: {
    selectedItemHistory: {
      type: Array,
      required: true
    }
  },
  methods: {
    getSelectedObjectKeys(item) {
      return Object.keys(item).filter((_, i) => i > 0);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";

.history-item {
  display: block;
  margin: $zero-rem;
  padding: $zero-rem;
  list-style: none;
  font-size: $font-size-big-screen;

  @include for-smaller-screens {
      font-size: $font-size-small-screen;
  }

  .history-item__content {
    display: block;
    margin: $zero-rem;
    padding: $half-rem $zero-rem;
    list-style: none;

    @include not-last-child {
      border-bottom: 1px solid $light-gray;
    }

    .history-item__content__item {
      display: inline-block;
      width: calc(100% / 3); // Only valid for three column row. Meant to be fixed for more columns.
      text-align: $align-left;

      &.active {
        font-weight: $font-bold;
      }

      &:last-child {
        text-align: right;
      }
    }
  }

  .history-item__info {
      list-style: none;
      margin: $zero-rem;
      padding: $zero-rem;

      .history-item__info__icon {
          padding-right: $half-rem;
      }
  }
}
</style>
