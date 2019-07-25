<template>
  <segment-wrapper>
    <segment-title v-if="title">
      <font-awesome-icon v-if="icon" :icon="icon" />
      {{ title }}
    </segment-title>
    <segment-content>
      <slot />
    </segment-content>
  </segment-wrapper>
</template>

<script>
import SegmentWrapper from "./SegmentWrapper";
import SegmentTitle from "./SegmentTitle";
import SegmentContent from "./SegmentContent";

let components = {
  SegmentWrapper,
  SegmentTitle,
  SegmentContent
};

export default {
  components: {
    ...components
  },
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
};
</script>