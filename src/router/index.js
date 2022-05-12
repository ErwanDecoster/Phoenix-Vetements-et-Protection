import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Service from '@/views/Service.vue';
import Contact from '@/views/Contact.vue';
import LegalNotice from '@/views/LegalNotice.vue';
import ErrorPage from '@/views/ErrorPage.vue';
import ProductDetails from '@/views/product/ProductDetails.vue';
import ProductEPI from '@/views/product/ProductEPI.vue';
import Tailored from '@/views/Tailored.vue';

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Home,
    meta: {
      title: 'Accueil',
      scrollPos: {
        top: 0,
        left: 0,
      },
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
    name: 'Vêtements sur mesure',
    component: Tailored,
    meta: {
      title: 'Vêtements sur mesure',
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
  {
    path: '/product/product_epi',
    name: 'ProductEPI',
    component: ProductEPI,
    props: true,
    meta: {
      title: 'Produits - EPI',
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
  scrollBehavior() {
    // if (to.meta.title !== 'Accueil') {
    //   console.log('OK');
    //   return { top: 0 };
    // }
    // console.log('pas OK');
    // return savedPosition;
  },
});

router.afterEach((to) => {
  // console.log(from);
  document.title = to.meta.title;
});

export default router;
