<template>
  <div class="service">
    <div>
      <div class="py-20 lg:py-10 m-auto max-w-screen-lg px-7 flex flex-col gap-20">
        <h1 class="w-full text-4xl font-bold">Produits - Vêtements sur mesure</h1>
        <button @click="$router.go(-1)" style="transform: translateX(calc(-100% - 2em))" class="hidden lg:block fixed py-2 px-8 bg-black text-white rounded font-light w-fit mt-auto duration-200 hover:shadow-md hover:shadow-neutral-600">Retour</button>
        <div class="grid md:grid-cols-2 justify-items-center md:gap-28 gap-10">
          <div class="flex flex-col gap-1">
            <p class="w-full text-2xl font-bold">Un logo sur vos vêtements ne suffit plus ?</p>
            <p class="text-lg">Parfait nous vous créons vos propres vêtements.</p>
            <p class="text-lg">Démarquez vous en comumniquant par vos salariés en un vêtement unique et à votre image, comme Bert&You.</p>
          </div>
          <div class="relative w-full p-2 rounded bg-[#2E4B92] aspect-video duration-200 hover:p-1">
            <img class="absolute w-full aspect-video rounded-sm object-cover" src="@/assets/sur_mesure.png" alt="">
          </div>
        </div>
        <div class="grid md:grid-cols-2 justify-items-center md:gap-28 gap-10">
          <div class="md:order-1 w-full flex flex-col gap-1">
            <h2 class="w-full text-2xl font-bold">Tout est possible</h2>
            <p class="text-lg">Une idée en tête ? Besoin des poches pour outils specifiques ? Ou un vêtement multirisques ?</p>
            <p class="text-lg">Pour chaque idée une solution peut être trouvée.</p>
            <router-link class="hidden lg:block py-2 px-8 bg-black text-white rounded font-light w-fit mt-auto duration-200 hover:shadow-md hover:shadow-neutral-600" to="/contact">Contactez nous</router-link>
          </div>
          <div class="relative w-full p-2 rounded bg-[#2E4B92] aspect-video duration-200 hover:p-1">
            <video width="530" height="300" class="absolute w-full aspect-video rounded-sm object-cover" autoplay muted loop>
              <source src="@/assets/tout_est_possible.mp4" type="video/mp4">
              <source src="movie.ogg" type="video/ogg">
            Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div class="grid md:grid-cols-2 justify-items-center md:gap-28 gap-10">
          <div class="flex flex-col gap-2">
            <p class="w-full text-2xl font-bold text-left">Nos points forts</p>
            <p class="text-lg font-bold">Nous vous offrons la posibilité de :</p>
            <ul class="list-disc list-inside">
              <li class="text-lg">Realiser une fabrication même par petites quantités.</li>
              <li class="text-lg">Nos vêtements s'adaptent au plus grand nombre de morphologies.</li>
              <li class="text-lg">Sans intermedaire maitriser vos coûts et votre stock.</li>
            </ul>
          </div>
          <div class="relative w-full p-2 rounded bg-[#2E4B92] aspect-video duration-200 hover:p-1">
            <img class="absolute w-full aspect-video rounded-sm object-cover" src="@/assets/nos_points_fort.webp" alt="">
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
