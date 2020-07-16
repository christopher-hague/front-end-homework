<template>
  <div>
    <h1>This is the home page</h1>
    <ul v-for="company in companies" v-bind:key="company.id">
      <li>{{ company.name }}</li>
      <li>{{ company.name }} ID: {{ company.id }}</li>
    </ul>
  </div>
</template>

<script>
import CompanyService from '../services/CompanyService';
// import Companies from '../components/Companies.vue';

export default {
  name: 'home',
  components: {
    // Companies,
  },
  data() {
    return {
      companies: [],
    };
  },
  created() {
    // eslint-disable-next-line
    CompanyService.getAll().then(response => this.companies = response);
    console.log(this.companies);
  },
};
</script>
