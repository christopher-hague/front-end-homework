import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Company from './components/company/Company.vue';
import EditCompany from './components/update/EditCompany.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/company/:id',
      name: 'company',
      component: Company,
      props: true,
    },
    {
      path: '/company/:id/edit',
      name: 'edit',
      component: EditCompany,
      props: true,
    },
  ],
});
