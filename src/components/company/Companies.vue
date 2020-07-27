<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="(field, i) in fields" :key="i">{{ field }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="company in companiesData" v-bind:key="company.id">
        <TableCell v-for="(value, key, i) in company"
          :key="i"
          :company="company"
          :content="value"
          :hasLink="key === 'name'"
        />
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
  computed: {
    companiesData() {
      const { companies } = this;
      const companiesData = companies;
      // eslint-disable-next-line
      companiesData.forEach((company) => (
        // eslint-disable-next-line
        company.totalSubscriptions = company.numberOfEmployees * company.subscriptionsPerEmployee
      ));
      return companiesData;
    },
  },
  data() {
    return {
      fields: ['ID', 'Name', 'Domain', 'Number of Employees', 'Subscriptions per Employee', 'Total Subscriptions'],
    };
  },
  props: ['companies'],
};
</script>
