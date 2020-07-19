<template>
  <div>
    <h1>
      <router-link :to="{ name: 'home' }">Home</router-link>
    </h1>
    <h1 class="title is-1">About {{ company.name }}</h1>
    <table class="table">
      <thead>
        <tr>
          <th><abbr title="ID">ID</abbr></th>
          <th><abbr title="Domain">Domain</abbr></th>
          <th><abbr title="Number of Employees">Number of Employees</abbr></th>
          <th><abbr title="Subscriptions per Employee">Subscriptions Per Employee</abbr></th>
          <th><abbr title="Total Subscriptions">Total Subscriptions</abbr></th>
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
    <UpdateEmployees
      v-bind:numberOfEmployees="company.numberOfEmployees"
      v-bind:id="company.id" />
    <div>
      <router-link
        :to="{ name: 'edit',
        params: {
          company: company,
          name: 'editCompany',
      }}">
          Edit details
      </router-link>
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
