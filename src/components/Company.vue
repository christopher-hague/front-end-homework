<template>
  <div>
    <h1>
      <router-link :to="{ name: 'home' }">Home</router-link>
    </h1>
    <h1 class="title is-1">About {{ company.name }}</h1>
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
          <th>{{ company.id }}</th>
          <td>{{ company.domain }}</td>
          <td>{{ company.numberOfEmployees }}</td>
          <td>{{ company.subscriptionsPerEmployee }}</td>
          <td>{{ company.numberOfEmployees * company.subscriptionsPerEmployee }}</td>
        </tr>
      </tbody>
    </table>
    <div class="content">
      <UpdateEmployees
        v-bind:numberOfEmployees="company.numberOfEmployees"
        v-bind:id="company.id" />
    </div>
    <div class="content">
      <button class="button">
        <router-link
          :to="{ name: 'edit',
          params: {
            company: company,
            name: 'editCompany',
        }}">
            Edit company details
        </router-link>
      </button>
    </div>
  </div>
</template>

<script>
import UpdateEmployees from './UpdateEmployees.vue';

export default {
  components: {
    UpdateEmployees,
  },
  props: ['company'],
};
</script>
