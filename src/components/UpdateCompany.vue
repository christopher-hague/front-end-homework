<template>
  <div>
    <h1>Update {{ company.name }}</h1>
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
      return `Domain has been updated from ${company.domain} to ${updatedDomain}.`;
    },
    isUpdateValid() {
      const {
        updatedDomain,
        updatedNumberOfEmployees,
        updatedSubscriptionsPerEmployee,
      } = this;

      return CompanyService.isEmptyString(updatedDomain)
        || CompanyService.isInvalidNumber(updatedNumberOfEmployees)
        || CompanyService.isEmptyString(updatedNumberOfEmployees)
        || CompanyService.isInvalidNumber(updatedSubscriptionsPerEmployee)
        || CompanyService.isEmptyString(updatedSubscriptionsPerEmployee);
    },
    numOfEmployeesUpdateMessage() {
      const { company, updatedNumberOfEmployees } = this;
      return `Number of Employees has been updated from ${company.numberOfEmployees} to ${updatedNumberOfEmployees}.`;
    },
    scriptsPerEmployeeUpdateMessage() {
      const { company, updatedSubscriptionsPerEmployee } = this;
      return `Domain has been updated from ${company.subscriptionsPerEmployee} to ${updatedSubscriptionsPerEmployee}.`;
    },
    updateCompany(e) {
      e.preventDefault();
      const {
        alertUpdates,
        isUpdateValid,
        updateDomain,
        updateNumberOfEmployees,
        updateSubscriptionsPerEmployee,
      } = this;

      if (isUpdateValid()) {
        // eslint-disable-next-line
        alert(`
          This form cannot be submitted. Be sure that:\n
          - the domain field contains a string
          - the number of employees and subscriptions per employee fields contain a valid number
        `);
      } else {
        alertUpdates();
        updateDomain();
        updateNumberOfEmployees();
        updateSubscriptionsPerEmployee();
      }
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
