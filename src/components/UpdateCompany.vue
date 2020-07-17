<template>
  <div>
    <h1>Update Company</h1>
    <form @submit="updateCompany">
      <div>
        <label for="updateDomain">Update domain: </label>
        <input
          type="text"
          id="updateDomain"
          for="updateDomain"
          :placeholder="[[ domain ]]"
          v-model="updatedDomain">
      </div>

      <div>
        <label for="updateNumberOfEmployees">Update number of employees: </label>
        <input
          type="text"
          id="updateNumberOfEmployees"
          for="updateNumberOfEmployees"
          :placeholder="[[ numberOfEmployees ]]"
          v-model="updatedNumberOfEmployees">
      </div>

      <div>
        <label for="updateSubscriptionsPerEmployee">
          Update number of subscriptions per employee:
        </label>
          <input
            type="text"
            id="updateSubscriptionsPerEmployee"
            for="updateNumberOfEmployees"
            :placeholder="[[ subscriptionsPerEmployee ]]"
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
      updatedDomain: '',
      updatedNumberOfEmployees: '',
      updatedSubscriptionsPerEmployee: '',
    };
  },
  methods: {
    alertUpdates() {
      // eslint-ignore-next-line
      const domainUpdateMessage = this.updatedDomain !== ''
        ? `Domain has been updated from ${this.domain} to ${this.updatedDomain}.`
        : 'Domain has not been updated.';

      const numOfEmployeesUpdateMessage = this.updatedNumberOfEmployees !== ''
        ? `Number of Employees has been updated from ${this.numberOfEmployees} to ${this.updatedNumberOfEmployees}.`
        : 'Number of Employees has not been updated.';

      const scriptsPerEmployeeUpdateMessage = this.updatedSubscriptionsPerEmployee !== ''
        ? `Domain has been updated from ${this.subscriptionsPerEmployee} to ${this.updatedSubscriptionsPerEmployee}.`
        : 'Subscriptions per employee has not been updated.';

      // eslint-disable-next-line
      alert(`${domainUpdateMessage} \n ${numOfEmployeesUpdateMessage} \n ${scriptsPerEmployeeUpdateMessage}`);
    },
    updateCompany(e) {
      e.preventDefault();

      this.alertUpdates();
      CompanyService.updateDomain(this.companyId, this.updatedDomain);
      CompanyService.updateEmployeeCount(this.companyId, this.updatedNumberOfEmployees);
      CompanyService.updateSubscriptionsPerEmployee(
        this.companyId,
        this.updatedSubscriptionsPerEmployee,
      );

      this.updatedDomain = '';
      this.updatedNumberOfEmployees = '';
      this.updatedSubscriptionsPerEmployee = '';
    },
  },
  props: [
    'id', 'name', 'domain', 'numberOfEmployees', 'subscriptionsPerEmployee',
  ],
};
</script>
