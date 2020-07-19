<template>
  <div>
    <form @submit="updateEmployeeCount">
      <div class="field">
        <div class="control">
          <label class="label">Update Number of Employees: </label>
          <input
            class="input"
            type="text"
            id="updateEmployeeCount"
            for="updateEmployeeCount"
            v-model="updatedEmployeeCount"
            :placeholder="[[ numberOfEmployees ]]">
          <button class="button" type="submit">Update Employee Count</button>
        </div>
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
      updatedEmployeeCount: '',
    };
  },
  methods: {
    confirmUpdate() {
      // eslint-disable-next-line
      return confirm('Are you sure you wish to update?');
    },
    isUpdateInvalid(input) {
      return CompanyService.isInvalidNumber(input) || CompanyService.isEmptyString(input);
    },
    updateEmployeeCount(e) {
      e.preventDefault();
      const {
        companyId,
        confirmUpdate,
        isUpdateInvalid,
        updatedEmployeeCount,
      } = this;

      if (isUpdateInvalid(updatedEmployeeCount)) {
        // eslint-disable-next-line
        return alert("Please enter a valid number.")
      }

      if (confirmUpdate()) {
        CompanyService.updateEmployeeCount(companyId, updatedEmployeeCount);
        this.updatedEmployeeCount = '';
      }
      return null;
    },
  },
  props: ['id', 'numberOfEmployees'],
};
</script>
