<template>
  <div v-if="items.length > 0" class="virtual-table__footer">
    <transition-group name="fade" mode="out-in">
      <div v-if="isPaginated" class="virtual-table__footer__pagination" key="pagination">
        <div class="virtual-table__footer__pagination__item first-page" @click="setPageNumber(1)">
          <font-awesome-icon icon="angle-double-left"/>
        </div>
        <div
          class="virtual-table__footer__pagination__item previous-page"
          @click="pageNumber > 1 && setPageNumber(pageNumber - 1)"
        >
          <font-awesome-icon icon="angle-left"/>
        </div>
        <div
          v-for="page in getNumberOfPages()"
          :key="page"
          @click="pageNumber !== page && setPageNumber(page)"
          :class="{'virtual-table__footer__pagination__item': true, 'current-page': page === pageNumber, 'nearby-page': isNearby(page)}"
        >{{page}}</div>
        <div
          class="virtual-table__footer__pagination__item next-page"
          @click="pageNumber < numberOfPages && setPageNumber(pageNumber + 1)"
        >
          <font-awesome-icon icon="angle-right"/>
        </div>
        <div
          class="virtual-table__footer__pagination__item last-page"
          @click="setPageNumber(numberOfPages)"
        >
          <font-awesome-icon icon="angle-double-right"/>
        </div>
      </div>
      <div v-if="!isPaginated" class="virtual-table__footer__info" key="info">
        <div class="virtual-table__footer__info__item">
          <font-awesome-icon icon="eye"/> All items are visible
        </div>
      </div>
      <div
        class="virtual-table__footer__settings"
        key="settings"
        @click="setPagination(!isPaginated)"
      >
        <span
          :class="{'virtual-table__footer__settings__button': true, 'pagination-active': isPaginated, 'pagination-not-active': !isPaginated}"
        >
          <font-awesome-icon icon="ellipsis-v"/>
        </span>
      </div>
    </transition-group>
  </div>
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
    pageNumber: {
      type: Number,
      required: true
    },
    numberOfPages: {
      type: Number,
      required: true
    },
    setPageNumber: {
      type: Function,
      required: true
    },
    setPagination: {
      type: Function,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    getNumberOfPages() {
      let filter = x => x > this.pageNumber - 3 && x < this.pageNumber + 3;

      if (this.pageNumber < 3) {
        filter = x => x < 6;
      }

      if (this.numberOfPages - 3 < this.pageNumber) {
        filter = x => x > this.numberOfPages - 5;
      }

      return Array(this.numberOfPages)
        .fill()
        .map((x, i) => (x = i + 1))
        .filter(x => filter(x));
    },
    isNearby(page) {
      switch (true) {
        case this.pageNumber === 1: {
          return page === this.pageNumber + 1 || page === this.pageNumber + 2;
        }
        case this.numberOfPages === this.pageNumber: {
          return page === this.pageNumber - 1 || page === this.pageNumber - 2;
        }
        default:
          return page === this.pageNumber - 1 || page === this.pageNumber + 1;
      }
    }
  },
  watch: {
    isPaginated() {
      // Not very smooth way to scroll back to top.
      document.getElementById("scroller").scrollTop = 0;
    },
    pageNumber() {
      // Not very smooth way to scroll back to top.
      document.getElementById("scroller").scrollTop = 0;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";

.virtual-table__footer {
  display: flex;
  justify-content: space-around;
  height: $table-footer-height;
  background-color: #6747c7;
  z-index: 100;

  span {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: $align-center;
    align-items: $align-center;
    position: relative;
    box-shadow: $default-shadow;

    .virtual-table__footer__pagination {
      display: flex;
      flex-wrap: wrap;
      justify-content: $align-center;
      align-items: $align-center;

      .virtual-table__footer__pagination__item {
        margin: $half-rem;
        width: $rem + $half-rem + $quarter-rem;
        height: $rem + $half-rem + $quarter-rem;
        line-height: $rem + $half-rem + $quarter-rem;
        font-size: $font-size-small-screen;
        vertical-align: $v-align-middle;
        text-align: $align-center;
        background-color: $white;
        border-radius: $quarter-rem;
        box-shadow: $light-shadow;
        transition: all 0.3s;
        cursor: pointer;

        @include hover {
          background-color: darken($white, $medium-darken);
        }

        &.first-page,
        &.next-page,
        &.previous-page,
        &.last-page {
          font-weight: $font-bold;
        }

        &.current-page {
          box-shadow: $medium-shadow;
          transform: scale(1.1);
          font-weight: $font-bold;
        }

        @include for-smaller-screens {
          display: none;

          &.first-page,
          &.previous-page,
          &.current-page,
          &.next-page,
          &.last-page {
            display: inline-block;
          }
        }

        @media screen and (min-width: 400px) {
          &.nearby-page {
            display: inline-block;
          }
        }
      }
    }

    .virtual-table__footer__settings {
      position: absolute;
      top: $zero-rem;
      right: $zero-rem;
      line-height: $table-footer-height;
      padding: $zero-rem $rem;
      color: white;
      cursor: pointer;
      overflow: hidden;

      .virtual-table__footer__settings__button {
        display: inline-block;
        box-shadow: none;
        transform-origin: center;
        transition: transform 0.3s;
        transform: rotate(0deg);

        &.pagination-active {
          transform: rotate(90deg);
        }
      }
    }

    .virtual-table__footer__info {
      .virtual-table__footer__info__item {
        font-size: $rem;
        color: $white;
        font-weight: $font-bold;
      }
    }
  }
}
</style>
