<template>
  <segment icon="hashtag" title="Last selected item">
    <selected-item :selectedItem="selectedItem" />
  </segment>
</template>

<script>
import {
  Segment,
  SelectedItem
} from "@/components";

import { mapGetters } from "vuex";

let components = {
  Segment,
  SelectedItem,
};

export default {
  components: {
    ...components
  },
  computed: {
    ...mapGetters({
      selectedItem: "activity/selectedItem"
    })
  },
};
</script>
