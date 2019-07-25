<template>
  <section>
    <row>
      <column>
        <last-selection/>
      </column>
      <column>
        <selection-history/>
      </column>
    </row>
  </section>
</template>

<script>
import {
  Row,
  Column,
  Segment,
  LastSelection,
  SelectionHistory
} from "@/components";

let components = {
  Row,
  Column,
  Segment,
  LastSelection,
  SelectionHistory
};

export default {
  components: {
    ...components
  }
};
</script>