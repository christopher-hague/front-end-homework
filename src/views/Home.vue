<template>
  <div>
    <h1 class="title">Fake Companies</h1>
    <div class="content">
      <ul v-for="company in companies" v-bind:key="company.id">
        <li>
          <router-link
            :to="{ name: 'company',
            params: { id: company.id, company: company }}">
            <p>{{ company.name }}</p>
          </router-link>
          <p>ID: {{ company.id }}</p>
        </li>
      </ul>
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
  },
};
</script>
