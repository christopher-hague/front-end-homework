<template>
  <div>
    <form @submit="updateEmployeeCount">
      <label for="updateEmployeeCount">Update Number of Employees</label>
      <input
        type="text"
        id="company.subscriptionsPerEmployee"
        for="company.subscriptionsPerEmployee"
        v-model="updatedEmployeeCount"
        :placeholder="[[ numberOfEmployees ]]">
      <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
import CompanyService from '../services/CompanyService';

export default {
  data() {
    return {
      companyId: this.id,
      updatedEmployeeCount: this.numberOfEmployees,
    };
  },
  methods: {
    updateEmployeeCount(e) {
      e.preventDefault();
      CompanyService.updateEmployeeCount(this.companyId, this.updatedEmployeeCount);
    },
  },
  props: ['id', 'numberOfEmployees'],
};
</script>
