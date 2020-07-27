<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="(field, i) in fields" :key="i">{{ field }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="company in companies" v-bind:key="company.id">
        <TableCell v-for="(value, key, i) in company"
            :key="i"
            :company="company"
            :content="value"
            :hasLink="key === 'name'"
        />
        <TableCell :content="company.numberOfEmployees * company.subscriptionsPerEmployee" />
      </tr>
    </tbody>
  </table>
</template>

<script>
import TableCell from '../data-table/TableCell.vue';

export default {
  components: {
    TableCell,
  },
  data() {
    return {
      fields: ['ID', 'Name', 'Domain', 'Number of Employees', 'Subscriptions per Employee', 'Total Subscriptions'],
    };
  },
  props: ['companies'],
};
</script>
