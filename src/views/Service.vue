<template>
  <div class="service">
    <div>
      <div class="py-20 m-auto max-w-screen-lg px-7 flex flex-col gap-20">
        <h1 class="w-full text-4xl font-bold">Service</h1>
        <div class="grid sm:grid-cols-2 justify-items-center md:gap-28 gap-10">
          <div class="w-full flex flex-col gap-2">
            <h2 class="w-full text-2xl font-bold">Sérigraphie et broderie</h2>
            <p class="w-full text-lg">Nous pouvons mettre sur chacun de vos vêtements un logo en format poitrine ou dos.</p>
          </div>
          <div class="relative w-full p-2 rounded bg-[#2E4B92] aspect-video duration-200 hover:p-1">
            <img class="bg-neutral-200 absolute w-full aspect-video rounded-sm object-contain" src="@/assets/colis.png" alt="">
          </div>
        </div>
        <div class="grid sm:grid-cols-2 justify-items-center md:gap-28 gap-10">
          <div class="sm:order-1 w-full flex flex-col gap-2">
            <h2 class="w-full text-2xl font-bold">Stock de sécurité</h2>
            <p class="w-full text-lg">Urgence de livraison sur vos EPI ? Phoenix, prend pour vous la précaution de garder un stock constant de chaussures de sécurité, gants et casques.</p>
          </div>
          <div class="relative w-full p-2 rounded bg-[#2E4B92] aspect-video duration-200 hover:p-1">
            <img class="absolute w-full aspect-video rounded-sm object-contain" src="@/assets/stock.png" alt="">
          </div>
        </div>
        <div class="grid sm:grid-cols-2 justify-items-center md:gap-28 gap-10">
          <div class="w-full flex flex-col gap-2">
            <h2 class="w-full text-2xl font-bold">Livraison par paquetage</h2>
            <p class="w-full text-lg">La réattribution des vêtements et des EPI à votre équipe est une corvée ? Ne cherchez plus ! Nous réalisons des paquetages nominatifs pour vous faciliter la tâche.</p>
            <!-- <router-link class="hidden lg:block py-2 px-8 bg-black text-white rounded font-light w-fit mt-auto duration-200 hover:shadow-md hover:shadow-neutral-600" to="/contact">Contactez nous</router-link> -->
          </div>
          <div class="relative w-full p-2 rounded bg-[#2E4B92] aspect-video duration-200 hover:p-1">
            <img class="absolute w-full aspect-video rounded-sm object-contain" src="@/assets/livraison_par_paquetage.webp" alt="">
          </div>
        </div>
      </div>
    </div>
    <ContactForm></ContactForm>
  </div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue';

export default {
  name: 'App',
  components: { ContactForm },
};
</script>

<style>

</style>
