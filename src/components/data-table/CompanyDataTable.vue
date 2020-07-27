<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="field in fields" :key="field">{{ field }}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <TableCell v-for="(cellContent, i) in cellContents"
          :key="i" :content="cellContent"
          :hasLink="hasLink"
          :company="company"
        />
      </tr>
    </tbody>
  </table>
</template>

<script>
import TableCell from './TableCell.vue';

export default {
  components: {
    TableCell,
  },
  computed: {
    cellContents() {
      return [
        this.company.id,
        this.company.domain,
        this.company.numberOfEmployees,
        this.company.subscriptionsPerEmployee,
        this.company.numberOfEmployees * this.company.subscriptionsPerEmployee,
      ];
    },
  },
  data() {
    return {
      fields: ['ID', 'Domain', 'Number of Employees', 'Subscriptions per Employee', 'Total Subscriptions'],
      hasLink: false,
    };
  },
  props: ['company'],
};
</script>
