import Vue from 'vue';
import VueRouter from 'vue-router';
// import FormPage from '@/views/FormPage.vue';
// import ListPage from '@/views/ListPage.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/FormPage',
      component: () => import('@/views/FormPage.vue'),
    },
    {
      path: '/ListPage',
      component: () => import('@/views/ListPage.vue'),
    },
    {
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});
