<template>
  <div>
    <h1>{{ company.name }}</h1>
    <p>Domain: {{ company.domain }}</p>
    <p>Number of Employees: {{ company.numberOfEmployees }}</p>
    <p>Subscriptions per Employee: {{ company.subsriptionsPerEmployee }}</p>
    <p>ID: {{ company.id }}</p>
  </div>
</template>

<script>
export default {
  props: ['company'],
};
</script>
