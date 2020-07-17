<template>
  <div>
    <h1>{{ company.name }}</h1>
    <p>Domain: {{ company.domain }}</p>
    <p>Number of Employees: {{ company.numberOfEmployees }}</p>
    <p>Subscriptions per Employee: {{ company.subscriptionsPerEmployee }}</p>
    <p>Total Subscriptions: {{ company.numberOfEmployees * company.subscriptionsPerEmployee }}</p>
    <p>ID: {{ company.id }}</p>
    <UpdateEmployees v-bind:numberOfEmployees="company.numberOfEmployees" v-bind:id="company.id" />
    <router-link
      :to="{ name: 'edit',
      params: {
        id: company.id,
        name: company.name,
        domain: company.domain,
        numberOfEmployees: company.numberOfEmployees,
        subscriptionsPerEmployee: company.subscriptionsPerEmployee
    }}">
        Update Company
    </router-link>
    <router-link :to="{ name: 'home' }">Home</router-link>
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
