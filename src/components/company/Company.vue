<template>
  <div>
    <p>
      <router-link :to="{ name: 'home' }">Home</router-link>
    </p>
    <h1 class="title is-1">About {{ company.name }}</h1>

    <div class="content">
      <CompanyDataTable v-bind:company="company" />
    </div>

    <div class="content">
      <UpdateEmployees
        v-bind:numberOfEmployees="company.numberOfEmployees"
        v-bind:id="company.id"
      />
    </div>

    <div class="content">
      <router-link
        :to="{ name: 'edit',
        params: {
          company: company,
          name: 'editCompany',
        }}"
      >
        <button class="button">
          Edit company details
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import CompanyDataTable from '../data-table/CompanyDataTable.vue';
import UpdateEmployees from '../update/UpdateEmployees.vue';

export default {
  components: {
    CompanyDataTable,
    UpdateEmployees,
  },
  props: ['company'],
};
</script>
