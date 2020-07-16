<template>
  <div>
    <h1>This is the home page</h1>
    <div v-for="company in companies" v-bind:key="company.id">
      <router-link
        :to="{ name: 'company',
        params: { id: company.id, company: company }}">
        <p>{{ company.name }}</p>
      </router-link>
      <p>{{ company.name }} ID: {{ company.id }}</p>
    </div>
  </div>
</template>

<script>
import CompanyService from '../services/CompanyService';

export default {
  name: 'home',
  components: {},
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
