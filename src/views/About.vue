<template>
  <div class="about pt-10">
    <div >
      <div class="py-10 m-auto max-w-screen-lg px-5 sm:px-7 flex flex-col gap-14">
        <button @click="$router.go(-1)" style="transform: translateX(calc(-100% - 2em))" class="hidden lg:block fixed py-2 px-8 bg-black text-white rounded font-light w-fit mt-auto duration-200 hover:shadow-md hover:shadow-neutral-600 border border-white">Retour</button>
        <div class="grid sm:grid-cols-2 justify-items-center md:gap-28 gap-10">
          <div class="w-full flex flex-col gap-2">
            <p class="w-full text-3xl font-bold text-left">
              Phoenix Vêtements et protection, c’est avant tout une superbe équipe qui ne souhaite qu’une chose, satisfaire ses clients !
            </p>
          </div>
          <div class="relative w-full p-2 rounded bg-[#2E4B92] aspect-video duration-200 hover:p-1">
            <img class="bg-neutral-200 absolute w-full aspect-video rounded-sm object-cover" src="@/assets/equipe.webp" alt="">
          </div>
        </div>
        <div class="grid sm:grid-cols-2 justify-items-center md:gap-28 gap-10">
          <div class="sm:order-1 w-full flex flex-col gap-2">
            <p class="w-full text-xl font-bold text-left">
              Crée en 2018 et situé dans le nord de l’Ardeche
            </p>
            <p class="w-full text-lg text-left">
              Phoenix Vêtements et protection livre dans toute la France ses clients.
            </p>
            <router-link class="hidden lg:block py-2 px-8 bg-black text-white rounded font-light w-fit mt-auto duration-200 hover:shadow-md hover:shadow-neutral-600" to="/contact">Contactez nous</router-link>
          </div>
          <iframe title="Carte Google Maps de la lacalisation de l'entreprise" class="w-full aspect-video p-2 rounded border-solid border-2 border-black" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11234.627554221119!2d4.694951673046876!3d45.2547305955475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xee55ab29a5ed411d!2sPhoenix%20V%C3%AAtements%20et%20Protection!5e0!3m2!1sfr!2sfr!4v1643039449658!5m2!1sfr!2sfr" allowfullscreen="" loading="lazy"></iframe>
        </div>
        <div class="justify-items-center flex flex-col gap-10">
          <p class="text-xl font-bold text-left">L'équipe</p>
          <div class="flex flex-wrap gap-2 justify-around">
            <div class="w-44 flex flex-col gap-2" v-for="Personel in Personels" v-bind:key="Personel.name">
              <img class="mx-auto h-24 w-24 bg-green-300 rounded-full" :src="require(`@/assets/equipe/${Personel.img}.webp`)" alt="">
              <div>
                <p class="text-center w-full font-semibold">{{ Personel.name }}</p>
                <p class="text-center w-full text-sm">{{ Personel.fonction }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <NewsCarousel :NewsSlide="NewsSlide"/>
    <div >
      <div class="py-10 mt-10 m-auto max-w-screen-lg px-7 flex flex-col gap-14">
        <p class="w-full text-xl font-bold text-left">
          Ils nous font confiance
        </p>
        <div class="flex justify-evenly gap-x-28 gap-y-16 flex-wrap">
          <img class="w-24 h-24" v-for="el in TheyTrustUs" v-bind:key="el" :src="require(`@/assets/logos/${el.img}.svg`)" alt="">
        </div>
      </div>
    </div>
    <ContactForm></ContactForm>
  </div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue';
import NewsCarousel from '../components/NewsCarousel.vue';

export default {
  name: 'App',
  components: { ContactForm, NewsCarousel },
  data() {
    return {
      Personels: [
        {
          name: 'Fabrice Attias',
          fonction: 'Dirigeant',
          img: '3',
        },
        {
          name: 'Christine Rosier',
          fonction: 'Assistante commerciale',
          img: '2',
        },
        {
          name: 'Magali Poyet',
          fonction: 'Service comptabilité',
          img: '4',
        },
        {
          name: 'Alison Clot',
          fonction: 'Service commercial',
          img: '1',
        },
        {
          name: 'Maxime Lafuma',
          fonction: 'Responsable magasin',
          img: '5',
        },
      ],
      TheyTrustUs: [
        { img: 'Logo_Avia' },
        { img: 'Logo_Eiffage' },
        { img: 'Logo_HCL_Technologies' },
        { img: 'Logo_Saint_Gobain' },
        { img: 'Logo_Vinci' },
      ],
      NewsSlide: [
        {
          title: 'Notre projet pour 2023',
          content: 'Une nouvelle adresse, un nouveau batiment.<br> Pour mieux vous servir et pour le confort de son équipe, Phoenix Vêtements et Protection construit son batiment sur 500 m² à Saint Clair les Annonay Zone de Massas.',
          // link: '',
          image: 'new_place',
          // video: '',
        },
        {
          title: 'MP Hygiène',
          content: 'Équipement du personnel de l\'entreprise MP Hygiène du nord de l\'ardeche.',
          // link: '',
          // image: '',
          video: 'https://www.youtube-nocookie.com/embed/F95lcd44qFE',
        },
        {
          title: 'Nouveau site internet',
          content: 'Notre site se faisant viellissant l\'arrivée d\'Erwan Decoster étudiant en développement web dans l\'entreprise en tant que stagiaire fut l\'occasion rêvé pour faire une refonte conplète du site.',
          link: 'erwan-decoster.com',
          image: 'Device_Mashups',
          // video: '',
        },
      ],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
