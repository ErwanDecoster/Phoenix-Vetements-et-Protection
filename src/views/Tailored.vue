<template>
  <div class="service">
    <div>
      <div class="py-20 lg:py-10 m-auto max-w-screen-lg px-7 flex flex-col gap-14">
        <button @click="$router.go(-1)" class="hidden lg:block py-2 px-8 bg-black text-white rounded font-light w-fit mt-auto duration-200 hover:shadow-md hover:shadow-neutral-600">Retour</button>
        <div class="grid md:grid-cols-2 justify-items-center md:gap-28 gap-10">
          <div class="flex flex-col gap-2">
            <p class="w-full text-2xl font-bold text-left">
              Un logo sur vos vêtements ne suffit plus ?
            </p>
            <p class="text-xl">Parfait nous vous créons vos propres vêtements.</p>
            <p class="text-xl">Démarquez vous en comumniquant par vos salariés en un vêtement unique et à votre image.</p>
          </div>
          <div class="relative w-full p-2 rounded border-solid border-2 border-black aspect-video duration-200 hover:p-1">
            <img class="absolute w-full aspect-video rounded-sm object-cover" src="@/assets/sur_mesure.png" alt="">
          </div>
        </div>
        <div class="grid md:grid-cols-2 justify-items-center md:gap-28 gap-10">
          <div class="md:order-1 w-full flex flex-col gap-2">
            <h2 class="text-left text-2xl font-semibold">
              Tout est possible
            </h2>
            <p class="text-xl">Une idée en tête ? Des poches qu'ils vous manquent ?</p>
            <p class="text-lg">Pour chaque idée une solution peut être trouvé.</p>
            <p class="text-lg">Vêtement multirisques.</p>
            <router-link class="hidden lg:block py-2 px-8 bg-black text-white rounded font-light w-fit mt-auto duration-200 hover:shadow-md hover:shadow-neutral-600" to="/contact">Contactez nous</router-link>
          </div>
          <div class="relative w-full p-2 rounded border-solid border-2 border-black aspect-video duration-200 hover:p-1">
            <img class="absolute w-full aspect-video rounded-sm object-cover" src="https://via.placeholder.com/600x600/ffa" alt="">
          </div>
        </div>
        <div class="grid md:grid-cols-2 justify-items-center md:gap-28 gap-10">
          <div class="flex flex-col gap-2">
            <p class="w-full text-2xl font-bold text-left">
              Nos points forts
            </p>
            <ul class="list-disc list-inside">
              <li class="text-xl">Fabrication par petites quantités.</li>
              <li class="text-xl">Nous nous adaptons aux très grands et/où aux grandes tailles.</li>
              <li class="text-xl">Prix avantageux : aucun intermediaire.</li>
            </ul>
          </div>
          <div class="relative w-full p-2 rounded border-solid border-2 border-black aspect-video duration-200 hover:p-1">
            <img class="absolute w-full aspect-video rounded-sm object-cover" src="https://via.placeholder.com/600x600/a9d" alt="">
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
