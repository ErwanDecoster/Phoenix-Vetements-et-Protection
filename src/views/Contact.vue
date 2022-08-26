<template>
  <div class="contact pt-10">
    <div>
      <div class="py-10 m-auto max-w-screen-lg px-7 flex flex-col gap-14">
        <button @click="$router.go(-1)" style="transform: translateX(calc(-100% - 2em))" class="hidden lg:block fixed py-2 px-8 bg-black text-white rounded font-light w-fit mt-auto duration-200 hover:shadow-md hover:shadow-neutral-600 border border-white">Retour</button>
        <p class="w-full text-4xl font-bold text-left">Localisation</p>
        <div class="grid md:grid-cols-2 justify-items-center md:gap-28 gap-10">
          <div class="w-full flex flex-col gap-2">
            <p class="w-full text-left text-lg">Situé au cœur de la région Situé au cœur de la région Auvergne-Rhône-Alpes, Phoenix Vêtements  et Protection se situe au : <b>135 Rue des Frères Seguin, 07430 Davézieux</b></p>
            <p class="text-lg">Tel : <a class="text-blue-700 hover:text-blue-300 duration-200" href="tel:0475692979">04 75 69 29 79</a></p>
            <p class="text-lg">Email : <a class="text-blue-700 hover:text-blue-300 duration-200" href="mailto:contact@phoenix-vetements.com">contact@phoenix-vetements.com</a></p>
          </div>
          <iframe title="Carte Google Maps de la localisation de l'entreprise" class="w-full aspect-video p-2 rounded border-solid border-2 border-black" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11234.627554221119!2d4.694951673046876!3d45.2547305955475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xee55ab29a5ed411d!2sPhoenix%20V%C3%AAtements%20et%20Protection!5e0!3m2!1sfr!2sfr!4v1643039449658!5m2!1sfr!2sfr" allowfullscreen="" loading="lazy"></iframe>
        </div>
        <p class="w-full text-4xl font-bold text-left">Horaires</p>
        <div class="grid justify-items-center md:gap-28 gap-10">
          <div class="w-full flex flex-col gap-2">
            <ol class="flex w-full flex-wrap gap-8 justify-around">
              <li>
                <ul class="flex flex-col items-center">
                  <li class="font-bold pb-2">Lundi :</li>
                  <li>8h - 12h </li>
                  <li>/</li>
                  <li>13h30 - 18h</li>
                </ul>
              </li>
              <li>
                <ul class="flex flex-col items-center">
                  <li class="font-bold pb-2">Mardi :</li>
                  <li>8h - 12h </li>
                  <li>/</li>
                  <li>13h30 - 18h</li>
                </ul>
              </li>
              <li>
                <ul class="flex flex-col items-center">
                  <li class="font-bold pb-2">Mercredi :</li>
                  <li>8h - 12h </li>
                  <li>/</li>
                  <li>13h30 - 18h</li>
                </ul>
              </li>
              <li>
                <ul class="flex flex-col items-center">
                  <li class="font-bold pb-2">Jeudi :</li>
                  <li>8h - 12h </li>
                  <li>/</li>
                  <li>13h30 - 18h</li>
                </ul>
              </li>
              <li>
                <ul class="flex flex-col items-center">
                  <li class="font-bold pb-2">Vendredi :</li>
                  <li>8h - 12h </li>
                  <li>/</li>
                  <li>13h30 - 18h</li>
                </ul>
              </li>
              <li>
                <ul class="flex flex-col items-center">
                  <li class="font-bold pb-2">Samedi :</li>
                  <li>fermé</li>
                </ul>
              </li>
              <li>
                <ul class="flex flex-col items-center">
                  <li class="font-bold pb-2">Dimanche :</li>
                  <li>fermé</li>
                </ul>
              </li>
            </ol>
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
  mounted() {
    window.scrollTo(0, 0);
  },
};
// @ is an alias to /src
</script>
