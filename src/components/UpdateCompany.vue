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
          :placeholder="[[ company.domain ]]"
          v-model="updatedDomain">
      </div>

      <div>
        <label for="updateNumberOfEmployees">Update number of employees: </label>
        <input
          type="text"
          id="updateNumberOfEmployees"
          for="updateNumberOfEmployees"
          :placeholder="[[ company.numberOfEmployees ]]"
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
            :placeholder="[[ company.subscriptionsPerEmployee ]]"
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
      const {
        domainUpdateMessage,
        numOfEmployeesUpdateMessage,
        scriptsPerEmployeeUpdateMessage,
      } = this;

      // eslint-disable-next-line
      alert(`${domainUpdateMessage()} \n ${numOfEmployeesUpdateMessage()} \n ${scriptsPerEmployeeUpdateMessage()}`);
    },
    domainUpdateMessage() {
      const { company, updatedDomain } = this;
      return updatedDomain !== ''
        ? `Domain has been updated from ${company.domain} to ${updatedDomain}.`
        : 'Domain has not been updated.';
    },
    numOfEmployeesUpdateMessage() {
      const { company, updatedNumberOfEmployees } = this;
      return updatedNumberOfEmployees !== ''
        ? `Number of Employees has been updated from ${company.numberOfEmployees} to ${updatedNumberOfEmployees}.`
        : 'Number of Employees has not been updated.';
    },
    scriptsPerEmployeeUpdateMessage() {
      const { company, updatedSubscriptionsPerEmployee } = this;
      return updatedSubscriptionsPerEmployee !== ''
        ? `Domain has been updated from ${company.subscriptionsPerEmployee} to ${updatedSubscriptionsPerEmployee}.`
        : 'Subscriptions per employee has not been updated.';
    },
    updateCompany(e) {
      e.preventDefault();
      const {
        alertUpdates,
        updateDomain,
        updateNumberOfEmployees,
        updateSubscriptionsPerEmployee,
      } = this;

      // check for invalid input before these fire
      alertUpdates();
      updateDomain();
      updateNumberOfEmployees();
      updateSubscriptionsPerEmployee();
    },
    updateDomain() {
      const { companyId, updatedDomain } = this;
      if (!CompanyService.isEmptyString(updatedDomain)) {
        CompanyService.updateDomain(companyId, updatedDomain);
        this.updatedDomain = '';
      }
    },
    updateNumberOfEmployees() {
      const { companyId, updatedNumberOfEmployees } = this;
      if (
        !CompanyService.isInvalidNumber(updatedNumberOfEmployees)
        && !CompanyService.isEmptyString(updatedNumberOfEmployees)
      ) {
        CompanyService.updateEmployeeCount(companyId, updatedNumberOfEmployees);
        this.updatedNumberOfEmployees = '';
      }
    },
    updateSubscriptionsPerEmployee() {
      const { companyId, updatedSubscriptionsPerEmployee } = this;
      if (
        !CompanyService.isInvalidNumber(updatedSubscriptionsPerEmployee)
        && !CompanyService.isEmptyString(updatedSubscriptionsPerEmployee)
      ) {
        CompanyService.updateSubscriptionsPerEmployee(companyId, updatedSubscriptionsPerEmployee);
        this.updatedSubscriptionsPerEmployee = '';
      }
    },
  },
  props: [
    'id', 'name', 'company',
  ],
};
</script>
