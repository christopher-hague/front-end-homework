<template>
  <div>
    <h1>{{ company.name }}</h1>
    <p>Domain: {{ company.domain }}</p>
    <p>Number of Employees: {{ company.numberOfEmployees }}</p>
    <p>Subscriptions per Employee: {{ company.subscriptionsPerEmployee }}</p>
    <p>Total Subscriptions: {{ company.numberOfEmployees * company.subscriptionsPerEmployee }}</p>
    <p>ID: {{ company.id }}</p>
    <UpdateEmployees v-bind:numberOfEmployees="company.numberOfEmployees" v-bind:id="company.id" />
    <div>
      <router-link
        :to="{ name: 'edit',
        params: {
          company: company,
          name: 'editCompany',
      }}">
          Update Company
      </router-link>
    </div>
    <div>
      <router-link :to="{ name: 'home' }">Home</router-link>
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
