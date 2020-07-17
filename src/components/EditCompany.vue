<template>
  <div>
    <router-link :to="{ name: 'home' }">Home</router-link>
    <h1 class="title">Update {{ company.name }}</h1>
    <form @submit="updateCompany">
      <div class="field">
        <div class="control">
          <label class="label" for="updateDomain">Update domain: </label>
          <input
            class="input"
            type="text"
            id="updateDomain"
            for="updateDomain"
            :placeholder="[[ company.domain ]]"
            v-model="updatedDomain">
        </div>
      </div>

      <div class=field>
        <div class="control">
          <label class="label" for="updateNumberOfEmployees">Update number of employees: </label>
          <input
            class="input"
            type="text"
            id="updateNumberOfEmployees"
            for="updateNumberOfEmployees"
            :placeholder="[[ company.numberOfEmployees ]]"
            v-model="updatedNumberOfEmployees">
        </div>
      </div>

      <div class=field>
        <div class="control">
          <label class="label" for="updateSubscriptionsPerEmployee">
            Update number of subscriptions per employee:
          </label>
            <input
              class="input"
              type="text"
              id="updateSubscriptionsPerEmployee"
              for="updateNumberOfEmployees"
              :placeholder="[[ company.subscriptionsPerEmployee ]]"
              v-model="updatedSubscriptionsPerEmployee">
        </div>
      </div>
      <div class="control">
        <button class="button" type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import CompanyService from '../services/CompanyService';

export default {
  data() {
    return {
      companyId: this.id,
      updatedDomain: '',
      updatedNumberOfEmployees: '',
      updatedSubscriptionsPerEmployee: '',
    };
  },
  methods: {
    alertUpdates() {
      const {
        domainUpdateMessage,
        numOfEmployeesUpdateMessage,
        scriptsPerEmployeeUpdateMessage,
      } = this;

      // eslint-disable-next-line
      alert(`${domainUpdateMessage()} \n ${numOfEmployeesUpdateMessage()} \n ${scriptsPerEmployeeUpdateMessage()}`);
    },
    alertUpdateIsInvalid() {
      // eslint-disable-next-line
      alert(`
        This form cannot be submitted. Be sure that:\n
        - the domain field contains a string
        - the number of employees and subscriptions per employee fields contain a valid number
      `);
    },
    domainUpdateMessage() {
      const { company, updatedDomain } = this;
      return `Domain has been updated from ${company.domain} to ${updatedDomain}.`;
    },
    isUpdateInvalid() {
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
        alertUpdateIsInvalid,
        alertUpdates,
        isUpdateInvalid,
        updateDomain,
        updateNumberOfEmployees,
        updateSubscriptionsPerEmployee,
      } = this;

      if (isUpdateInvalid()) {
        alertUpdateIsInvalid();
      } else {
        alertUpdates();
        updateDomain();
        updateNumberOfEmployees();
        updateSubscriptionsPerEmployee();
      }
    },
    updateDomain() {
      const { companyId, updatedDomain } = this;

      CompanyService.updateDomain(companyId, updatedDomain);
      this.updatedDomain = '';
    },
    updateNumberOfEmployees() {
      const { companyId, updatedNumberOfEmployees } = this;

      CompanyService.updateEmployeeCount(companyId, updatedNumberOfEmployees);
      this.updatedNumberOfEmployees = '';
    },
    updateSubscriptionsPerEmployee() {
      const { companyId, updatedSubscriptionsPerEmployee } = this;

      CompanyService.updateSubscriptionsPerEmployee(companyId, updatedSubscriptionsPerEmployee);
      this.updatedSubscriptionsPerEmployee = '';
    },
  },
  props: [
    'id', 'name', 'company',
  ],
};
</script>
