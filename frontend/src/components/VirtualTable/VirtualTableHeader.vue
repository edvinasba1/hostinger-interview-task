<template>
  <div v-if="itemKeys.length > 0" class="virtual-table__header">
    <div
      v-for="(key, index) in itemKeys"
      @click="setColumn(key)"
      :key="`${key}-${index}`"
      :class="{'virtual-table__header__column': true, 'active': columnName === key}"
    >
    <!-- String conversion from camelCasedKey to Camel cased key -->
      {{ getKeyName(key) }}
      <!-- Arrow condition for chosen key and ascending boolean value. Elsewise => null. -->
      <span v-if="columnName === key" :class="{'virtual-table__header__column__item': true, 'ascending': isAscending, 'descending': !isAscending}">
        <font-awesome-icon icon="long-arrow-alt-down" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isAscending: {
        type: Boolean,
        required: true,
    },
    columnName: {
        type: String,
        required: true
    },
    itemKeys: {
      type: Array,
      required: true,
    },
    setColumn: {
        type: Function,
        required: true,
    }
  },
  methods: {
    getKeyName(key) {
      return key
        .split(/(?=[A-Z])/)
        .map((x, i) => {
          if (!i) {
            return x.charAt(i).toUpperCase() + x.slice(1);
          }
          return x.toLowerCase();
        })
        .join(" ");
    },
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";

.virtual-table__header {
  display: flex;
  justify-content: space-evenly;
  text-transform: uppercase;
  background-color: $purple;

  .virtual-table__header__column {
    flex: 1;
    line-height: $table-header-height;
    padding: $zero-rem $rem;
    vertical-align: middle;
    font-size: $font-size-big-screen;
    font-weight: $font-bold;
    cursor: pointer;
    color: $light-gray;
    transition: all .3s ease-in-out;

    &.active {
      background-color: darken($purple, 10%);
      color: $white;
    }

    @include hover {
      background-color: darken($purple, 5%);
    }

    &:last-child {
      padding-right: $rem + $quarter-rem;
    }

    .virtual-table__header__column__item {
      display: inline-block;
      font-weight: $font-bold;
      transform: rotate(-180deg);
      transition: transform .3s;

      &.ascending {
        transform: rotate(0deg);
      }

      &.descending {
        transform: rotate(-180deg);
      }

    }

    @include for-smaller-screens {
        padding: $zero-rem $half-rem;
        text-align: $align-center;
        font-size: $font-size-small-screen;
    }
  }
}
</style>
