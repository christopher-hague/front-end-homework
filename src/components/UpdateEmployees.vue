<template>
  <div>
    <form @submit="updateEmployeeCount">
      <label for="updateEmployeeCount">Update Number of Employees: </label>
      <input
        type="text"
        id="updateEmployeeCount"
        for="updateEmployeeCount"
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

      if (this.isUpdateInvalid()) {
        // eslint-disable-next-line
        return alert("Please enter a valid number.")
      }

      if (this.confirmUpdate()) {
        CompanyService.updateEmployeeCount(this.companyId, this.updatedEmployeeCount);
        this.updatedEmployeeCount = '';
      }
      return null;
    },
    confirmUpdate() {
      // eslint-disable-next-line
      return confirm('Are you sure you wish to update?');
    },
    isUpdateInvalid() {
      // eslint-disable-next-line
      return isNaN(this.updatedEmployeeCount);
    },
  },
  props: ['id', 'numberOfEmployees'],
};
</script>
