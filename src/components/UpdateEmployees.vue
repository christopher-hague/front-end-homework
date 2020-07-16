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
      updatedEmployeeCount: '',
    };
  },
  methods: {
    updateEmployeeCount(e) {
      e.preventDefault();
      return this.confirmUpdate()
        ? CompanyService.updateEmployeeCount(this.companyId, this.updatedEmployeeCount)
        : null;
    },
    confirmUpdate() {
      // eslint-disable-next-line
      return confirm('Are you sure you wish to update?');
    },
  },
  props: ['id', 'numberOfEmployees'],
};
</script>
