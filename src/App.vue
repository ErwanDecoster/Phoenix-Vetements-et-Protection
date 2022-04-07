<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${content} | SITE_NAME` : `SITE_NAME` }}</template>
  </metainfo>
  <div id="nav" class="lg:hidden fixed py-6 px-6 w-full flex gap-8 items-center justify-between z-20">
    <button @click="toggleNavbar" class="ml-auto py-2 px-8 bg-black border-2 border-white text-white rounded font-light w-fit mt-auto duration-200 hover:shadow-md hover:shadow-neutral-600">Menu</button>
  </div>
  <!--  -->
  <!-- <div id="nav" class="py-4 px-8 w-full flex gap-8 items-center justify-between shadow-lg fixed bg-white text-balck z-20">
    <div>
      <router-link to="/">
        <img class="h-12 md:h-16 -my-4 duration-200" src="./assets/logo.svg" alt="logo Phoenix Vetements et protections">
      </router-link>
    </div>
    <div class="max-w-screen-lg hidden lg:block">
      <p class="text-2xl xl:text-4xl">Expert en vetements de travail et EPI</p>
      <p>Tous les EPI de la tête aux pieds</p>
    </div>
    <div class="flex gap-8 items-center">
      <a class="group flex items-center gap-2 md:text-lg duration-200" href="tel:0475692979">
        <svg class="group-hover:fill-black fill-white h-6 duration-200 hidden md:block" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.5639 5.06241C25.064 1.56255 20.064 1.0627 17.064 3.56204L4.56394 16.0624C1.92478 19.2336 1.44807 21.9967 2.56394 28.5624C6.63941 49.1894 26.1584 74.5625 38.564 87.5625C50.9695 100.563 75.5732 118.141 99.064 125.062C103.564 126.388 108.564 126.062 111.064 124.062L125.064 110.062C127.064 107.562 125.564 103.062 123.064 101.062L100.064 85.5625C96.564 83.0625 93.1368 82.5625 89.564 85.5625C76.9332 96.1678 66.564 90.0625 51.5639 74.5625C40.064 61.0625 31.6662 52.1068 41.564 39.0625C44.2197 35.5625 45.064 32.0625 43.5639 29.5624L27.5639 5.06241Z" stroke="black" stroke-width="4"/>
        </svg>
        04 75 69 29 79
      </a>
      <router-link class="hidden lg:block py-2 px-8 bg-black text-white rounded font-light w-fit mt-auto duration-200 hover:shadow-md hover:shadow-neutral-600" to="/contact">Contactez nous</router-link>
      <button @click="toggleNavbar" class="py-2 px-8 bg-black text-white rounded font-light w-fit mt-auto duration-200 hover:shadow-md hover:shadow-neutral-600">Menu</button>
    </div>
  </div> -->
 <!--  -->
  <div id="nav" class="hidden lg:block py-4 px-8 w-full h-20 shadow-lg fixed bg-white text-balck z-20">
    <div class="flex gap-8 items-center justify-between">
      <div>
        <router-link to="/">
          <img class="h-12 md:h-16 -my-4 duration-200" src="./assets/logos/Logo_Phoenix_Vetements.svg" alt="logo Phoenix Vetements et protections">
        </router-link>
      </div>
      <div class="w-1/2 flex justify-center items-center gap-4" :class="{'bg-black text-white shadow-lg hidden lg:flex': activeSubMenuProduits }">
        <router-link class="text-xl text-center w-1/2 bold duration-150 hover:-translate-y-0.5" to="/">Accueil</router-link>
        <button @mouseenter="toggleProducts" @mouseleave="toggleProducts" @focus="toggleProducts" class="text-xl relative text-center w-1/2 bold duration-150 hover:-translate-y-0.5" @click="openSubMenu" :class="{'underline underline-offset-4': activeSubMenuProduits }">
          Produits
          <div v-if="showProduct" class="bg-white group-hover:text-orange-500 shadow-lg min-h-min min-w-max w-full position absolute inset-x-0 top-full flex flex-col p-4 gap-2">
            <router-link @click="toggleProducts" class="text-xl text-left min-w-full bold duration-150 hover:underline hover:-translate-x-0.5" to="/tailored">Vêtements sur mesure</router-link>
            <router-link v-for="category in categorys" v-bind:key="category" @click="toggleProducts" class="text-xl text-left min-w-full bold duration-150 hover:underline hover:-translate-x-0.5" :to="{ name: 'ProductDetails', params: { name: category.name }}">{{ category.name }}</router-link>
          </div>
        </button>
        <router-link class="text-xl text-center w-1/2 bold duration-150 hover:-translate-y-0.5" to="/service">Services</router-link>
        <router-link class="text-xl text-center w-1/2 bold duration-150 hover:-translate-y-0.5" to="/about">A propos</router-link>
        <router-link class="text-xl text-center w-1/2 bold duration-150 hover:-translate-y-0.5" to="/contact">Contact</router-link>
      </div>
      <div class="flex gap-8 items-center">
        <a class="hidden group xl:flex items-center gap-2 md:text-lg duration-200" href="tel:0475692979">
          <svg class="group-hover:fill-black fill-white h-6 duration-200 hidden 2xl:block" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.5639 5.06241C25.064 1.56255 20.064 1.0627 17.064 3.56204L4.56394 16.0624C1.92478 19.2336 1.44807 21.9967 2.56394 28.5624C6.63941 49.1894 26.1584 74.5625 38.564 87.5625C50.9695 100.563 75.5732 118.141 99.064 125.062C103.564 126.388 108.564 126.062 111.064 124.062L125.064 110.062C127.064 107.562 125.564 103.062 123.064 101.062L100.064 85.5625C96.564 83.0625 93.1368 82.5625 89.564 85.5625C76.9332 96.1678 66.564 90.0625 51.5639 74.5625C40.064 61.0625 31.6662 52.1068 41.564 39.0625C44.2197 35.5625 45.064 32.0625 43.5639 29.5624L27.5639 5.06241Z" stroke="black" stroke-width="4"/>
          </svg>
          04 75 69 29 79
        </a>
        <router-link class="hidden lg:block py-2 px-8 bg-black text-white rounded font-light w-fit mt-auto duration-200 hover:shadow-md hover:shadow-neutral-600" to="/contact">Contactez nous</router-link>
      </div>
    </div>
  </div>
  <!--  -->
  <router-view v-slot="{ Component }" class="lg:pt-20">
    <transition name="route">
      <component :is="Component" />
    </transition>
  </router-view>
  <Footer></Footer>
  <transition name="navappear">
    <div v-if="showNavbar">
      <Navbar @close="toggleNavbar()"></Navbar>
    </div>
  </transition>
</template>

<style>
[v-cloak] { display:none; }
#app {
   font-family: 'Nunito', sans-serif;
   /* font-family: 'Poppins', sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.navappear-enter-from,
.navappear-leave-to {
  opacity: 0;
}
.navappear-enter-active {
  transition: all .2s ease-out;
}
.navappear-leave-active {
  transition: all .2s ease-in;
}

.route-enter-from {
  opacity: 0;
}
.route-enter-to {
  opacity: 1;
}
.route-enter-active {
  transition: all .2s ease-out;
}
.route-leave-from {
  opacity: 1;
}
.route-leave-to {
  opacity: 0;
}
.route-leave-active {
  transition: all .2s ease-in;
}

</style>

<script>
// import anime from '../node_modules/animejs/lib/anime.es.js';
import Footer from './components/Footer.vue';
import Navbar from './components/FullNavbar.vue';

// const anime = require('animejs');

export default {
  name: 'App',
  components: { Footer, Navbar },
  data() {
    return {
      showNavbar: false,
      showProduct: false,
      categorys: [
        {
          name: 'Vêtements',
        },
        {
          name: 'Tête',
        },
        {
          name: 'Gant',
        },
        {
          name: 'Pied',
        },
        {
          name: 'Anti chute',
        },
        {
          name: 'Hygiene',
        },
        {
          name: 'Sérigraphie et broderie',
        },
      ],
    };
  },
  methods: {
    toggleNavbar() {
      this.showNavbar = !this.showNavbar;
    },
    toggleProducts() {
      this.showProduct = !this.showProduct;
    },
  },
};
// @ is an alias to /src
</script>
