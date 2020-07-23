<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="field in fields" :key="field">{{ field }}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <TableCell v-bind:content="company.id" />
        <TableCell v-bind:content="company.domain" />
        <TableCell v-bind:content="company.numberOfEmployees" />
        <TableCell v-bind:content="company.subscriptionsPerEmployee" />
        <TableCell v-bind:content="totalSubscriptions" />
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
    totalSubscriptions() {
      const { company } = this;
      return company.numberOfEmployees * company.subscriptionsPerEmployee;
    },
  },
  data() {
    return {
      fields: ['ID', 'Domain', 'Number of Employees', 'Subscriptions per Employee', 'Total Subscriptions'],
    };
  },
  props: ['company'],
};
</script>
