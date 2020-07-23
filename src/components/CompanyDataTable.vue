<template>
  <table class="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Domain</th>
        <th>Number of Employees</th>
        <th>Subscriptions Per Employee</th>
        <th>Total Subscriptions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <TableCell v-bind:content="company.id" />
        <TableCell v-bind:content="company.domain" />
        <TableCell v-bind:content="company.numberOfEmployees" />
        <TableCell v-bind:content="company.subscriptionsPerEmployee" />
        <TableCell v-bind:content="company.numberOfEmployees * company.subscriptionsPerEmployee" />
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
  props: ['company'],
};
</script>
