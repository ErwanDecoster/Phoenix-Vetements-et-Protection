<template>
  <div class="home selection:bg-neutral-400 pt-16">
    <div >
      <h1 class="max-w-screen-lg mx-auto pl-7 mt-12 text-5xl font-bold">Produits - EPI</h1>
      <div class="py-10 pt-16 m-auto max-w-screen-lg pl-7 pr-11 flex flex-col gap-20">
        <div class="grid sm:grid-cols-2 justify-items-center md:gap-28 gap-10">
          <div class="w-full flex flex-col gap-2">
            <p class="w-full text-3xl font-bold text-left">
              Pour la Tête
            </p>
            <p class="w-full text-left text-lg">
              <span class="text-lg">Nous vous proposons un large choix</span>
            </p>
            <router-link class="py-2 px-8 bg-black text-white rounded font-light w-fit mt-auto duration-200 hover:shadow-md hover:shadow-neutral-600" :to="{ name: 'ProductDetails', params: { name: 'Tête' }}" >Voir les produits</router-link>
          </div>
          <div class="relative w-full p-2 rounded bg-[#2E4B92] aspect-video duration-200 hover:p-1">
            <img class="bg-neutral-200 absolute w-full aspect-video rounded-sm object-cover" src="@/assets/tete.webp" alt="">
          </div>
        </div>
        <div class="grid sm:grid-cols-2 justify-items-center md:gap-28 gap-10">
          <div class="sm:order-1 w-full flex flex-col gap-2">
            <p class="w-full text-3xl font-bold text-left">
              Pour les mains
            </p>
            <p class="w-full text-left text-lg">
              <span class="text-lg">Nous vous proposons un large choix</span>
            </p>
            <router-link class="py-2 px-8 bg-black text-white rounded font-light w-fit mt-auto duration-200 hover:shadow-md hover:shadow-neutral-600" :to="{ name: 'ProductDetails', params: { name: 'Gant' }}" >Voir les produits</router-link>
          </div>
          <div class="relative w-full p-2 rounded bg-[#2E4B92] aspect-video duration-200 hover:p-1">
            <img class="bg-neutral-200 absolute w-full aspect-video rounded-sm object-cover" src="@/assets/main.webp" alt="">
          </div>
        </div>
        <div class="grid sm:grid-cols-2 justify-items-center md:gap-28 gap-10">
          <div class="w-full flex flex-col gap-2">
            <p class="w-full text-3xl font-bold text-left">
              Pour les pieds
            </p>
            <p class="w-full text-left text-lg">
              <span class="text-lg">Nous vous proposons un large choix</span>
            </p>
            <router-link class="py-2 px-8 bg-black text-white rounded font-light w-fit mt-auto duration-200 hover:shadow-md hover:shadow-neutral-600" :to="{ name: 'ProductDetails', params: { name: 'Pied' }}" >Voir les produits</router-link>
          </div>
          <div class="relative w-full p-2 rounded bg-[#2E4B92] aspect-video duration-200 hover:p-1">
            <img class="bg-neutral-200 absolute w-full aspect-video rounded-sm object-cover" src="@/assets/pied.webp" alt="">
          </div>
        </div>
        <div class="grid sm:grid-cols-2 justify-items-center md:gap-28 gap-10">
          <div class="sm:order-1 w-full flex flex-col gap-2">
            <p class="w-full text-3xl font-bold text-left">
              Anti chute
            </p>
            <p class="w-full text-left text-lg">
              <span class="text-lg">Nous vous proposons un large choix</span>
            </p>
            <router-link class="py-2 px-8 bg-black text-white rounded font-light w-fit mt-auto duration-200 hover:shadow-md hover:shadow-neutral-600" :to="{ name: 'ProductDetails', params: { name: 'Anti chute' }}" >Voir les produits</router-link>
          </div>
          <div class="relative w-full p-2 rounded bg-[#2E4B92] aspect-video duration-200 hover:p-1">
            <img class="bg-neutral-200 absolute w-full aspect-video rounded-sm object-cover" src="@/assets/anti_chute.webp" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
