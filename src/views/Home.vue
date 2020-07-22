<template>
  <div>
    <h1 class="title">Fake Companies</h1>
    <Companies v-bind:companies="companies" />
  </div>
</template>

<script>
import CompanyService from '../services/CompanyService';
import Companies from '../components/Companies.vue';

export default {
  name: 'home',
  components: {
    Companies,
  },
  data() {
    return {
      companies: [],
    };
  },
  created() {
    // eslint-disable-next-line
    CompanyService.getAll().then(response => this.companies = response);
  },
};
</script>
