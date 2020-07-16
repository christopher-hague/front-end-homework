<template>
  <div>
    <ul>
      <li v-for="company in companies" v-bind:key="company.id">
        <Company v-bind:company="company" />
      </li>
    </ul>
  </div>
</template>

<script>
import Company from './Company.vue';

export default {
  components: {
    Company,
  },
  props: ['companies'],
};
</script>
