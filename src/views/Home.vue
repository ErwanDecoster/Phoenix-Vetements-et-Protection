<template>
  <div class="home selection:bg-neutral-400  ">
    <HeaderCarousel :headerCarousel="headerCarousel" />
    <div >
      <div class="py-10 m-auto max-w-screen-lg pl-7 pr-11 flex flex-col gap-20">
        <div class="grid sm:grid-cols-2 justify-items-center md:gap-28 gap-10">
          <div class="w-full flex flex-col gap-2">
            <p class="w-full text-3xl font-bold text-left">Des vêtements aux EPI nous avons ce qu'il vous faut</p>
            <p class="text-md">
              <b class="text-lg">Votre protection : notre préocupation.</b><br>
              Pour chaque situation nous vous proposons un équipement adapté.<br>
              112 fournisseurs : plus de 50 000 réferences.<br>
            </p>
          </div>
          <!-- <div class="relative w-full p-2 rounded bg-[#2E4B92] aspect-video duration-200 hover:p-1"> -->
          <div class="relative w-full p-2 rounded bg-[#2E4B92] aspect-video duration-200 hover:p-1">
            <img class="bg-neutral-200 absolute w-full aspect-video rounded-sm object-cover" src="@/assets/2vets.png" alt="">
          </div>
        </div>
        <div class="grid sm:grid-cols-2 justify-items-center md:gap-28 gap-10">
          <div class="sm:order-1 w-full flex flex-col gap-2">
            <h2 class="w-full text-2xl font-bold">
              Donner de l'impacte à votre entreprise<br>
            </h2>
            <p class="text-xl font-bold -mt-1">Et faites vous re-marquer.</p>
            <p class="text-md">Posez votre logo en format poitrine ou dos. Celui-ci peut être sous forme de broderie, sérigraphie, transferts...</p>
            <router-link class="py-2 px-8 bg-black text-white rounded font-light w-fit mt-auto duration-200 hover:shadow-md hover:shadow-neutral-600" :to="{ name: 'ProductDetails', params: { name: 'Sérigraphie et broderie' }}">
              Voir des exemples
            </router-link>
          </div>
          <div class="relative w-full p-2 rounded bg-[#2E4B92] aspect-video duration-200 hover:p-1">
            <img class="bg-neutral-200 absolute w-full aspect-video rounded-sm object-cover" src="@/assets/produits/broderie_1.webp" alt="">
          </div>
        </div>
        <div class="grid sm:grid-cols-2 justify-items-center md:gap-28 gap-10">
          <div class="w-full flex flex-col gap-2">
            <h2 class="w-full text-2xl font-bold">
              Vêtements sur mesure
            </h2>
            <p class="text-lg font-bold">Et si nous créons un vêtement qui vous ressemblent ?</p>
            <p class="text-md">Nous concevons et fabriquons des vêtements de travail à vos couleurs et selon vos besoins. Ainsi choisissons les couleurs, les poches utiles à votre activité et la mercerie.</p>
            <p class="text-md">Possible même par faible quantité.</p>
            <router-link class="py-2 px-8 bg-black text-white rounded font-light w-fit mt-auto duration-200 hover:shadow-md hover:shadow-neutral-400" to="/tailored">
              Voir des exemples
            </router-link>
          </div>
          <div class="relative w-full p-2 rounded bg-[#2E4B92] aspect-video duration-200 hover:p-1">
            <img class="bg-neutral-200 absolute w-full aspect-video rounded-sm object-contain" src="@/assets/tailored.png" alt="">
          </div>
        </div>
        <div class="grid sm:grid-cols-2 justify-items-center md:gap-28 gap-10">
          <div class="sm:order-1 w-full flex flex-col gap-2">
            <h2 class="w-full text-2xl font-bold">
              Service paquetage
            </h2>
            <p class="text-md">Vous n'avez pas le temps de distribuer vos vêtements à vos salariés, pas de soucis, on s'en charge !</p>
            <router-link class="py-2 px-8 bg-black text-white rounded font-light w-fit mt-auto duration-200 hover:shadow-md hover:shadow-neutral-400" to="/service">
              En voir plus
            </router-link>
          </div>
          <div class="relative w-full p-2 rounded bg-[#2E4B92] aspect-video duration-200 hover:p-1">
            <img class="bg-neutral-200 absolute w-full aspect-video rounded-sm object-contain" src="@/assets/livraison_par_paquetage.webp" alt="">
          </div>
        </div>
        <div class="grid sm:grid-cols-2 justify-items-center md:gap-28 gap-10">
          <div class="w-full flex flex-col gap-2">
            <h2 class="w-full text-2xl font-bold">Vêtements indoor et outdoor</h2>
            <p class="text-md">
              Du tee-shirt à la parka ou softshell. <br>
              Haute visibilité ou non.</p>
            <p class="text-md">Parmi tous nos fournisseurs nous choisissons les vêtements qui vous correspondent.</p>
            <router-link class="py-2 px-8 bg-black text-white rounded font-light w-fit mt-auto duration-200 hover:shadow-md hover:shadow-neutral-600" :to="{ name: 'ProductDetails', params: { name: 'Vêtements' }}">
              Voir des exemples
            </router-link>
          </div>
          <div class="relative w-full p-2 rounded bg-[#2E4B92] aspect-video duration-200 hover:p-1">
            <img class="bg-neutral-200 absolute w-full aspect-video rounded-sm object-contain" src="@/assets/indoor_outdoor.webp" alt="">
          </div>
        </div>
        <div class="grid sm:grid-cols-2 justify-items-center md:gap-28 gap-10">
          <div class="sm:order-1 w-full flex flex-col gap-2">
            <h2 class="w-full text-2xl font-bold">Des EPI pour tous les risques</h2>
            <p class="text-md">
              De la protection de la tête aux chaussures de sécurité.
            </p>
            <router-link class="py-2 px-8 bg-black text-white rounded font-light w-fit mt-auto duration-200 hover:shadow-md hover:shadow-neutral-600" :to="{ name : 'ProductEPI' }">
              Voir des exemples
            </router-link>
          </div>
          <div class="relative w-full p-2 rounded bg-[#2E4B92] aspect-video duration-200 hover:p-1">
            <img class="bg-neutral-200 absolute w-full aspect-video rounded-sm object-contain" src="@/assets/epi.webp" alt="">
          </div>
        </div>
      </div>
    </div>
    <ContactForm></ContactForm>
  </div>
</template>

<script>
// import { ref } from 'ref';
// import gsap from 'gsap';
import ContactForm from '../components/ContactForm.vue';
// import Carousel from '../components/Carousel.vue';
import HeaderCarousel from '../components/HeaderCarousel.vue';

export default {
  name: 'App',
  // components: { ContactForm, Carousel, HeaderCarousel },
  components: { ContactForm, HeaderCarousel },
  data() {
    return {
      slide: 1,
      headerCarousel: [
        {
          position: 1,
          link: 'main_slide_1',
          text: 'Chimie',
        },
        {
          position: 2,
          link: 'main_slide_2',
          text: 'TP-BTP',
        },
        {
          position: 3,
          link: 'main_slide_3',
          text: 'Agroalimentaire et Service',
        },
        {
          position: 3,
          link: 'main_slide_4',
          text: 'Industrie',
        },
      ],
    };
  },
};
</script>
