<template>
  <table class="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Domain</th>
        <th>Number of Employees</th>
        <th>Subscriptions Per Employee</th>
        <th>Total Subscriptions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{ company.id }}</td>
        <td>{{ company.domain }}</td>
        <td>{{ company.numberOfEmployees }}</td>
        <td>{{ company.subscriptionsPerEmployee }}</td>
        <td>{{ company.numberOfEmployees * company.subscriptionsPerEmployee }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>

export default {
  props: ['company'],
};
</script>
