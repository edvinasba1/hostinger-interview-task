<template>
  <recycle-scroller
    :items="items"
    :item-size="itemHeight"
    id="scroller"
    class="virtual-table__scroller"
  >
    <template v-slot="{ item, index }">
      <div
        :class="{'virtual-table__scroller__content': true, 'active': item === selectedItem.item}"
        ref="content"
      >
        <div
          :data-heading="getKeyName(key)"
          v-for="(key, index) in Object.keys(item).filter((x,i) => i > 0)"
          :key="key + index"
          @click="setSelectedItem(item, item[key])"
          :class="{'virtual-table__scroller__content__column': true, 'active': item[key] === selectedItem.column && item === selectedItem.item}"
        >{{ item[key] }}</div>
      </div>
    </template>
  </recycle-scroller>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      required: true
    },
    isPaginated: {
      type: Boolean,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    pageSize: {
      type: Number,
      required: true
    },
    selectedItem: {
      type: Object,
      required: true
    },
    lazyLoadItems: {
      type: Function,
      required: true
    },
    setSelectedItem: {
      type: Function,
      required: true
    }
  },
  data: () => ({
    // Sometimes I hate myself for hacking my way through...
    itemHeight: window.innerWidth < 768 ? 90 : 30,
    windowWidth: window.innerWidth
  }),
  mounted() {
    this.$nextTick(() => {
      let element = document.getElementById("scroller");

      element.addEventListener("scroll", this.scroll);

      window.addEventListener("resize", () => {
        this.windowWidth = window.innerWidth;
      });
      window.addEventListener("orientationchange", () => {
        this.windowWidth = window.innerWidth;
      });
    });
  },
  methods: {
    scroll() {
      let element = document.getElementById("scroller");

      let scrollHeightToBottom =
        element.scrollHeight - element.clientHeight - element.scrollTop;

      let ratio = scrollHeightToBottom / element.scrollHeight;

      if (!this.isPaginated && !this.isLoading && ratio < 0.1) {
        let payload = {
          skip: this.items.length,
          limit: this.items.length + this.pageSize
        };

        this.lazyLoadItems(payload);
      }
    },
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
    }
  },
  watch: {
    isLoading(newVal) {
      if (!newVal) {
        if (this.items.length > 0) {
          this.$nextTick(() => {
            this.itemHeight = this.$refs.content.clientHeight;
          });
        }
      }
    },
    windowWidth(newVal) {
      this.itemHeight = this.$refs.content.clientHeight;

      // Hacks hacks hacks...
      if (newVal < 768) {
        this.itemHeight = 90;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";

.virtual-table__scroller {
  width: 100%;
  overflow-y: auto;
  height: calc(var(--vh) * 100 - #{$appbar-height} - #{$table-header-height} -
    #{$table-footer-height} - 2 * #{$rem});
    
  .virtual-table__scroller__content {
    display: flex;
    height: $table-content-height-big-screen;
    justify-content: space-evenly;
    cursor: pointer;

    @include for-bigger-screens {
      border-bottom: 1px solid $light-gray;

      &.active {
        background-color: darken(#ffffff, $medium-darken);
      }

      @include hover {
        background-color: darken(#ffffff, $light-darken);
      }
    }

    .virtual-table__scroller__content__column {
      padding: $zero-rem $rem;
      flex: 1;
      line-height: $table-content-height-big-screen;
      font-size: $font-size-big-screen;
      vertical-align: middle;

      @include for-bigger-screens {
        &.active {
          font-weight: $font-bold;
        }
      }
    }
  }

  &::-webkit-scrollbar {
    width: 5px !important;
  }

  &::-webkit-scrollbar-track {
    background-color: #ffffff !important;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #000000 !important;
    height: 30px;
  }
}

@include for-smaller-screens {
  .virtual-table__scroller {
    .virtual-table__scroller__content {
      display: block;
      height: $table-content-height-small-screen;
      font-size: $font-size-small-screen;
      transition: all 0.3s ease-in-out;

      &.active {
        background-color: darken(#ffffff, $medium-darken);
      }

      @include not-last-child {
        border-bottom: 1px solid $light-gray;
      }

      &:not(:first-child) :not(:nth-last-child(0)) {
        .virtual-table__scroller__content__column {
          &:first-child {
            @include hover {
              box-shadow: inset 0 1px 0 0 black;
            }
          }
          &:last-child {
            @include hover {
              box-shadow: inset 0 1px 0 0 black;
            }
          }
        }
      }

      .virtual-table__scroller__content__column {
        display: block;

        &.active {
          font-weight: $font-bold;
        }

        @include hover {
          &:not(.active) {
            background-color: darken(#ffffff, $light-darken);
          }
        }

        &:before {
          content: attr(data-heading);
          display: inline-block;
          width: $rem * 6;
          margin-right: $half-rem;
          color: $light-gray;
          font-size: $font-size-small-screen;
          font-weight: $font-bold;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
      }
    }
  }
}
</style>
