import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Company from './components/Company.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/details',
      name: 'Details',
      component: Company,
    },
  ],
});
