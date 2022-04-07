import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Service from '@/views/Service.vue';
import Contact from '@/views/Contact.vue';
import LegalNotice from '@/views/LegalNotice.vue';
import ErrorPage from '@/views/ErrorPage.vue';
import ProductDetails from '@/views/product/ProductDetails.vue';
import Tailored from '@/views/Tailored.vue';

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Home,
    meta: {
      title: 'Accueil',
    },
  },
  {
    path: '/about',
    name: 'A propos',
    component: About,
    meta: {
      title: 'A propos',
    },
  },
  {
    path: '/service',
    name: 'Service',
    component: Service,
    meta: {
      title: 'Service',
    },
  },
  {
    path: '/tailored',
    name: 'Vetemnt sur mesure',
    component: Tailored,
    meta: {
      title: 'Vetemnt sur mesure',
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Contact',
    },
  },
  {
    path: '/legalnotice',
    name: 'Mension legal',
    component: LegalNotice,
    meta: {
      title: 'Mension legal',
    },
  },
  {
    path: '/product/:name',
    name: 'ProductDetails',
    component: ProductDetails,
    props: true,
    meta: {
      title: 'Produits',
    },
  },
  // catchall 404
  {
    path: '/:catchAll(.*)',
    name: '',
    component: ErrorPage,
    meta: {
      title: 'Erreur 404',
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    console.log(to);
    console.log(from);
    return savedPosition || { top: 0 };
  },
});

router.afterEach((to, from) => {
  console.log(from);
  document.title = to.meta.title;
});

export default router;
