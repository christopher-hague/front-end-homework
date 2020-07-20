<template>
  <div>
    <h1 class="title">Fake Companies</h1>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Domain</th>
          <th>Number of Employees</th>
          <th>Subscriptions Per Employee</th>
          <th>Total Subscriptions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="company in companies" v-bind:key="company.id">
          <td>{{ company.id }}</td>
          <td>
            <router-link
              :to="{ name: 'company',
              params: { id: company.id, company: company }}">
              <p>{{ company.name }}</p>
            </router-link>
          </td>
          <td>{{ company.domain }}</td>
          <td>{{ company.numberOfEmployees }}</td>
          <td>{{ company.subscriptionsPerEmployee }}</td>
          <td>{{ company.numberOfEmployees * company.subscriptionsPerEmployee }}</td>
        </tr>
      </tbody>
    </table>
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
