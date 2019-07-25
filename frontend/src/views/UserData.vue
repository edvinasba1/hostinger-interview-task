<template>
  <section>
    <row>
      <column>
        <virtual-table/>
      </column>
    </row>
  </section>
</template>

<script>
import { Row, Column, VirtualTable } from "@/components";

let components = {
  Row,
  Column,
  VirtualTable
};

export default {
  components: {
    ...components
  }
};
</script>