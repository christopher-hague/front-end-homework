<template>
  <div>
    <h1>Update Company</h1>
    <form @submit="updateCompany">
      <div>
        <label for="updatedDomain">Update domain: </label>
        <input
          type="text"
          id="updatedDomain"
          for="updatedDomain"
          v-model="updatedDomain">
      </div>

      <div>
        <label for="updatedNumberOfEmployees">Update number of employees: </label>
        <input
          type="text"
          id="updatedNumberOfEmployees"
          for="updatedNumberOfEmployees"
          v-model="updatedNumberOfEmployees">
      </div>

      <div>
        <label for="updatedSubscriptionsPerEmployee">
          Update number of subscriptions per employee:
        </label>
          <input
            type="text"
            id="updatedSubscriptionsPerEmployee"
            for="updatedNumberOfEmployees"
            v-model="updatedSubscriptionsPerEmployee">
      </div>
      <input type="submit" value="Submit">
    </form>
    <router-link :to="{ name: 'home' }">Home</router-link>
  </div>
</template>

<script>
import CompanyService from '../services/CompanyService';

export default {
  data() {
    return {
      companyId: this.id,
      companyName: this.name,
      updatedDomain: this.domain,
      updatedNumberOfEmployees: this.numberOfEmployees,
      updatedSubscriptionsPerEmployee: this.subscriptionsPerEmployee,
    };
  },
  methods: {
    updateCompany(e) {
      e.preventDefault();

      CompanyService.updateDomain(this.companyId, this.updatedDomain);
      CompanyService.updateEmployeeCount(this.companyId, this.updatedNumberOfEmployees);
      CompanyService.updateSubscriptionsPerEmployee(
        this.companyId,
        this.updatedSubscriptionsPerEmployee,
      );

      this.updatedDomain = this.domain;
      this.updatedNumberOfEmployees = this.numberOfEmployees;
      this.updatedSubscriptionsPerEmployee = this.subscriptionsPerEmployee;
    },
  },
  props: [
    'id', 'name', 'domain', 'numberOfEmployees', 'subscriptionsPerEmployee',
  ],
};
</script>
