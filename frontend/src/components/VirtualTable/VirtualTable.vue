<template>
  <virtual-table-wrapper
    :items="items"
  >
    <virtual-table-header
      :isAscending="isAscending"
      :columnName="columnName"
      :itemKeys="itemKeys"
      :setColumn="(key) => setColumn(key)"
    />
    <virtual-table-body
      :isLoading="isLoading"
      :isPaginated="isPaginated"
      :items="items"
      :pageSize="pageSize"
      :lazyLoadItems="lazyLoadItems"
      :selectedItem="selectedItem"
      :setSelectedItem="selectItem"
    />
    <virtual-table-footer
      :isLoading="isLoading"
      :isPaginated="isPaginated"
      :pageNumber="pageNumber"
      :numberOfPages="numberOfPages"
      :setPageNumber="setPageNumber"
      :setPagination="setPagination"
      :items="items"
    />
  </virtual-table-wrapper>
</template>

<script>
import VirtualTableWrapper from './VirtualTableWrapper';
import VirtualTableBody from './VirtualTableBody';
import VirtualTableHeader from './VirtualTableHeader';
import VirtualTableFooter from './VirtualTableFooter';

let components = {
  VirtualTableWrapper,
  VirtualTableHeader,
  VirtualTableBody,
  VirtualTableFooter
}

import {
  mapGetters,
  mapActions,
  } from 'vuex';

export default {
  components: {
    ...components
  },
  computed: {
    ...mapGetters({
      isLoading: 'table/isLoading',
      isAscending: 'table/isAscending',
      isPaginated: 'table/isPaginated',
      columnName: 'table/columnName',
      pageNumber: 'table/pageNumber',
      numberOfPages: 'table/numberOfPages',
      pageSize: 'table/pageSize',
      items: 'table/users',
      itemKeys: 'table/userKeys',
      selectedItem: 'activity/selectedItem',
    })
  },
  methods: {
    ...mapActions({
      setColumn: 'table/setColumn',
      setPageNumber: 'table/setPageNumber',
      setPagination: 'table/setPagination',
      lazyLoadItems: 'table/lazyLoadItems',
      setSelectedItem: 'activity/setSelectedItem',
    }),
    selectItem(item, col) {
      let payload = {
        item: item,
        column: col,
      }

      this.setSelectedItem(payload);
    }
  },
};
</script>