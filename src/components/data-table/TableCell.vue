<template>
  <td v-if="hasLink">
    <router-link
      :to="{ name: 'company',
      params: { id: company.id, company: company }}">
      <p>{{ content }}</p>
    </router-link>
  </td>
  <td v-else>{{ content }}</td>
</template>

<script>
export default {
  props: ['company', 'content', 'hasLink'],
};
</script>
