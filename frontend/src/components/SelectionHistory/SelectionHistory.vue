<template>
  <segment icon="history" title="User selected fields history">
    <history-item :selectedItemHistory="selectedItemHistory" />
  </segment>
</template>

<script>
import { Segment, HistoryItem } from "@/components";

import { mapGetters } from "vuex";

let components = {
  Segment,
  HistoryItem,
};

export default {
  components: {
    ...components
  },
  computed: {
    ...mapGetters({
      selectedItemHistory: "activity/selectedItemHistory"
    })
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";

.selection-history-list {
  list-style: none;
  margin: $zero-rem;
  padding: $zero-rem;

  .selection-history-list__item {
    padding: $zero-rem;
    margin: $zero-rem;

    &.active {
      font-weight: $font-bold;
    }

    @include not-last-child {
      padding-bottom: $half-rem;
    }
  }

  .selection-history-list__info {
    font-weight: $font-bold;

    .selection-history-list__info__icon {
      padding-right: $half-rem;
    }
  }
}
</style>
