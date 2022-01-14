import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      exact: false,
      path: '/',
      component: '@/layouts/index',
      routes: [
        { exact: true, path: '/', component: '@/pages/Home/index' },
        { exact: true, path: '/settings', component: '@/pages/Settings/index' },
      ],
    },
  ],
  fastRefresh: {},
});
