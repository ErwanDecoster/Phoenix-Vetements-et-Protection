<template>
  <div class="backdrop fixed inset-0 z-30" @click.self="closeNavbar">
    <div class="absolute inset-6 sm:inset-8 shadow-2xl shadow-black grid duration-200 ou" :class="{'lg:left-1/2': !activeSubMenuProduits }">
      <div class="bg-white flex justify-center">
        <div class="flex w-full flex-col justify-center items-center gap-4" :class="{'bg-black text-white shadow-lg hidden lg:flex': activeSubMenuProduits }">
          <router-link @click.self="closeNavbar" class="text-3xl sm:text-4xl text-center w-1/2 bold duration-200 hover:-translate-x-2 hover:text-[#2E4B92]" to="/">Accueil</router-link>
          <button class="text-3xl sm:text-4xl text-center w-1/2 bold duration-200 hover:-translate-x-2 hover:text-[#2E4B92]" @click="openSubMenu" :class="{'underline underline-offset-4': activeSubMenuProduits }">Produits</button>
          <router-link @click.self="closeNavbar" class="text-3xl sm:text-4xl text-center w-1/2 bold duration-200 hover:-translate-x-2 hover:text-[#2E4B92]" to="/service">Services</router-link>
          <router-link @click.self="closeNavbar" class="text-3xl sm:text-4xl text-center w-1/2 bold duration-200 hover:-translate-x-2 hover:text-[#2E4B92]" to="/about">A propos</router-link>
          <router-link @click.self="closeNavbar" class="text-3xl sm:text-4xl text-center w-1/2 bold duration-200 hover:-translate-x-2 hover:text-[#2E4B92]" to="/contact">Contact</router-link>
        </div>
        <transition name="scaleX">
          <div v-if="activeSubMenuProduits" class="relative bg-white text-black w-full flex flex-col justify-center items-center gap-4 col-span-3 duration-300">
            <button @click.self="openSubMenu" class="absolute left-10 top-10 py-2 px-8 bg-black text-white rounded font-light w-fit">Retour</button>
            <router-link @click="closeNavbar" class="text-3xl sm:text-4xl text-center min-w-full bold duration-200 hover:-translate-x-2 hover:text-[#2E4B92]" to="/tailored">Vetement sur mesure</router-link>
            <router-link v-for="category in categorys" v-bind:key="category" @click="closeNavbar" class="text-3xl sm:text-4xl text-center min-w-full bold duration-200 hover:-translate-x-2 hover:text-[#2E4B92]" :to="{ name: 'ProductDetails', params: { name: category.name }}">{{ category.name }}</router-link>
          </div>
        </transition>
      <button @click="closeNavbar" class="close_button absolute h-14 w-14 top-4 right-4 duration-200 hover:rotate-45">
        <span class="h-1 w-3/4 block rotate-45 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-black rounded-md"></span>
        <span class="h-1 w-3/4 block -rotate-45 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-black rounded-md"></span>
      </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Navbar',
  data() {
    return {
      activeSubMenuProduits: false,
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
    openSubMenu() {
      this.activeSubMenuProduits = !this.activeSubMenuProduits;
    },
    closeNavbar() {
      this.$emit('close');
    },
  },
};
</script>
<style>

.scaleX-enter-from,
.scaleX-leave-to {
  width: 0;
  opacity: 0;
}
.scaleX-enter-to,
.scaleX-leave-from {
  width: 100%;
}
</style>
