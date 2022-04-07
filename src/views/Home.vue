<template>
  <div class="home selection:bg-neutral-400  ">
    <HeaderCarousel :headerCarousel="headerCarousel" />
    <div class="">
      <div class="py-10 m-auto max-w-screen-lg pl-7 pr-11 flex flex-col gap-20">
        <div class="grid sm:grid-cols-2 justify-items-center md:gap-28 gap-10">
          <div class="w-full flex flex-col gap-2">
            <transition appear @before-enter="beforeEnter" @enter="enter">
              <p class="w-full text-4xl font-bold text-left">
                Des vêtements aux EPI nous avons ce qu'il vous faut
              </p>
            </transition>
            <p class="w-full text-left text-lg">
              <!-- + 20000 références -->
              <span class="font-bold text-xl">Votre protection : notre préocupation.<br></span>
              <span class="text-lg"> Pour chaque situation nous vous proposons un équipement adapté.</span><br>
              112 fournisseurs : plus de 50 000 réferences.<br>
            </p>
          </div>
          <div class="relative w-full p-2 rounded border-solid border-2 border-black aspect-video duration-200 hover:p-1">
            <img class="bg-neutral-200 absolute w-full aspect-video rounded-sm object-cover" src="@/assets/2vets.png" alt="">
          </div>
        </div>
        <div class="grid sm:grid-cols-2 justify-items-center md:gap-28 gap-10">
          <div class="sm:order-1 w-full flex flex-col gap-2">
            <h2 class="text-left text-xl font-semibold">
              Donner de l'impacte à votre entreprise <br>
              Et faites vous re-marquer
              <!-- DONNER DE LA VISIBILIT A VOTRE ENTREPRISE <br>
              Faites vous remarquer -->
            </h2>
            <p>
              Posez votre logo en format poitrine ou dos. Celui-ci peut être sous forme de broderie, sérigraphie, transferts...
            </p>
            <router-link class="py-2 px-8 bg-black text-white rounded font-light w-fit mt-auto duration-200 hover:shadow-md hover:shadow-neutral-600" :to="{ name: 'ProductDetails', params: { name: 'Sérigraphie et broderie' }}">
              Voir des exemples
            </router-link>
          </div>
          <div class="relative w-full p-2 rounded border-solid border-2 border-black aspect-video duration-200 hover:p-1">
            <img class="bg-neutral-200 absolute w-full aspect-video rounded-sm object-cover" src="@/assets/produits/broderie_1.webp" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="">
    <!-- <div class="bg-black"> -->
      <div class="py-10 m-auto max-w-screen-lg pl-7 pr-11 flex flex-col gap-14 text-black">
        <div class="grid sm:grid-cols-2 justify-items-center md:gap-28 gap-10">
          <div class="w-full flex flex-col gap-2">
            <h2 class="text-left text-xl font-semibold">
              Vêtements sur mesure
            </h2>
            <p class="text-[17px]">Et si nous créons un vêtement qui vous ressemblent ?</p>
            <p class="text-sm">Nous concevons et fabriquons des vétements de travail à vos couleurs et selon vos besoins. Ainsi choisissons les couleurs du vétements, les poches utiles a votre activité et la mercerie.</p>
            <p class="text-sm">Possible même par faible quantité.</p>
            <router-link class="py-2 px-8 bg-black text-white rounded font-light w-fit mt-auto duration-200 hover:shadow-md hover:shadow-neutral-400" to="/tailored">
              Voir des exemples
            </router-link>
          </div>
          <div class="relative w-full p-2 rounded border-solid border-2 border-black aspect-video duration-200 hover:p-1">
            <img class="bg-neutral-200 absolute w-full aspect-video rounded-sm object-contain" src="@/assets/tailored.png" alt="">
          </div>
        </div>
        <div class="grid sm:grid-cols-2 justify-items-center md:gap-28 gap-10">
          <div class="sm:order-1 w-full flex flex-col gap-2">
            <h2 class="text-left text-xl font-semibold">
              Service paquetage
            </h2>
            <p class="text-md">Vous ne souhaitez pas vous embêter à redistribuer vos commandes à vos salariés, pas de soucis, on s'en charge !</p>
            <router-link class="py-2 px-8 bg-black text-white rounded font-light w-fit mt-auto duration-200 hover:shadow-md hover:shadow-neutral-400" to="/tailored">
              En voir plus
            </router-link>
          </div>
          <div class="relative w-full p-2 rounded border-solid border-2 border-black aspect-video duration-200 hover:p-1">
            <img class="bg-neutral-200 absolute w-full aspect-video rounded-sm object-contain" src="@/assets/colis.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="bg-black">
      <div class="py-10 m-auto max-w-screen-lg pl-7 pr-11 flex flex-col gap-14 text-white">
        <div class="grid sm:grid-cols-2 justify-items-center md:gap-28 gap-10">
          <div class="sm:order-1 w-full flex flex-col gap-2">
            <h2 class="text-left text-xl font-semibold">
              Des vêtements pour tout les milieux
            </h2>
            <ul class="list-disc list-inside">
              <li>Agroalimentaire</li>
              <li>BTP</li>
              <li>Voirie</li>
              <li>Chimi</li>
              <li>Haut voltage</li>
            </ul>
            <router-link class="py-2 px-8 bg-white text-black rounded font-light w-fit mt-auto duration-200 hover:shadow-md hover:shadow-neutral-400" :to="{ name: 'ProductDetails', params: { name: 'Corps' }}">
              Voir des exemples
            </router-link>
          </div>
          <Carousel :slides2="slide2" />
        </div>
      </div>
    </div> -->
    <div class="">
      <div class="py-10 m-auto max-w-screen-lg pl-7 pr-11 flex flex-col gap-14 text-black">
        <div class="grid sm:grid-cols-2 justify-items-center md:gap-28 gap-10">
          <div class="w-full flex flex-col gap-2">
            <h2 class="text-left text-xl font-semibold">
              Vêtements indoor et outdoor
            </h2>
            <p class="text-lg">Du tee-shirt à la parka ou softshell.</p>
            <p class="text-lg">Haute visibilité ou non HV.</p>
            <p class="text-lg">Parmi tous nos fournisseurs nous choisissons les vêtements qui vous correspondent.</p>
            <router-link class="py-2 px-8 bg-black text-white rounded font-light w-fit mt-auto duration-200 hover:shadow-md hover:shadow-neutral-600" :to="{ name: 'ProductDetails', params: { name: 'Vêtements' }}">
              Voir des exemples
            </router-link>
          </div>
          <div class="relative w-full p-2 rounded border-solid border-2 border-black aspect-video duration-200 hover:p-1">
            <img class="bg-neutral-200 absolute w-full aspect-video rounded-sm object-contain" src="@/assets/2clasic_vet.png" alt="">
          </div>
        </div>
        <div class="grid sm:grid-cols-2 justify-items-center md:gap-28 gap-10">
          <div class="sm:order-1 w-full flex flex-col gap-2">
            <h2 class="text-left text-xl font-semibold">
              Des EPI pour tous les risques.
            </h2>
            <p class="text-lg">
              De la protection de la tête aux chaussures de securité.
            </p>
            <router-link class="py-2 px-8 bg-black text-white rounded font-light w-fit mt-auto duration-200 hover:shadow-md hover:shadow-neutral-600" :to="{ name: 'ProductDetails', params: { name: 'Tête' }}">
              Voir des exemples
            </router-link>
          </div>
          <div class="relative w-full p-2 rounded border-solid border-2 border-black aspect-video duration-200 hover:p-1">
            <img class="bg-neutral-200 absolute w-full aspect-video rounded-sm object-contain" src="@/assets/epi.png" alt="">
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
