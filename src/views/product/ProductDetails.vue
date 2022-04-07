<template>
  <div>
    <div>
      <div class="py-10 m-auto max-w-screen-lg px-5 md:px-7">
        <div v-for="category in categorys" v-bind:key="category">
          <div v-show="category.name == name" class="flex flex-col gap-10 pb-16">
            <button @click="$router.go(-1)" class="hidden lg:block py-2 px-8 bg-black text-white rounded font-light w-fit mt-auto duration-200 hover:shadow-md hover:shadow-neutral-600">Retour</button>
            <div>
              <h1 class="w-full text-4xl font-bold text-left">Produits - {{ name }}</h1>
              <p class="mt-4 text-lg font-bold">Les produits présentés sont des exemples parmi un large choix, bien d'autres sont disponibles.</p>
              <p  class="mt-4 text-lg">{{ category.desc }}</p>
            </div>
            <div v-if="category.fourniseurs">
              <h2 class="text-2xl font-semibold pb-4">Nos principaux fourniseurs</h2>
              <!-- <ul class="flex flex-wrap gap-14 my-3"> -->
              <ul class="fourniseur grid gap-12 my-3 justify-items-center items-center" style="">
                <li v-for="fourniseur in category.fourniseurs" v-bind:key="fourniseur">
                  <img class="w-32" :src="require(`@/assets/logos/${fourniseur.name}.svg`)" alt="">
                </li>
              </ul>
            </div>
            <div v-for="content in category.contents" v-bind:key="content.id">
              <h2 class="text-2xl pb-4">{{ content.type }}</h2>
              <div v-if="content.desc" class="grid grid-cols-1 sm:grid-cols-2 justify-items-stretch gap-6 sm:gap-0">
                <div class="image_container relative w-full p-2 rounded border-solid border-2 border-black aspect-video duration-200 hover:p-1">
                  <img @click="content.modal = true" v-if="content.leftImgActive" class="object-contain bg-neutral-200 absolute w-full h-full rounded-sm" :src="require(`@/assets/produits/${content.leftImgActive}.webp`)" alt="">
                  <img @click="content.modal = true" v-if="content.leftImgActive" class="duration-100 top object-contain bg-neutral-200 absolute w-full h-full rounded-sm" :src="require(`@/assets/produits/${content.leftImg}.webp`)" alt="">
                  <img @click="content.modal = true" v-if="!content.leftImgActive" class="duration-100 object-contain bg-neutral-200 absolute w-full h-full rounded-sm" :src="require(`@/assets/produits/${content.leftImg}.webp`)" alt="">
                </div>
                <div class="image_container relative w-full p-2 rounded border-solid border-2 border-black aspect-video duration-200 hover:p-1 sm:-left-6 sm:top-6 ">
                  <img @click="content.modal = true" v-if="content.rightImgActive" class="object-contain bg-neutral-200 absolute w-full h-full rounded-sm" :src="require(`@/assets/produits/${content.rightImgActive}.webp`)" alt="">
                  <img @click="content.modal = true" v-if="content.rightImgActive" class="duration-100 top object-contain bg-neutral-200 absolute w-full h-full rounded-sm" :src="require(`@/assets/produits/${content.rightImg}.webp`)" alt="">
                  <img @click="content.modal = true" v-if="!content.rightImgActive" class="duration-100 object-contain bg-neutral-200 absolute w-full h-full rounded-sm" :src="require(`@/assets/produits/${content.rightImg}.webp`)" alt="">
                </div>
              </div>
              <div v-if="!content.desc" class="grid grid-cols-1 sm:grid-cols-2 justify-items-stretch gap-6 sm:gap-0">
                <div class="image_container relative w-full p-2 rounded border-solid border-2 border-black aspect-video duration-200 hover:p-1">
                  <img v-if="content.leftImgActive" class="object-contain bg-neutral-200 absolute w-full h-full rounded-sm" :src="require(`@/assets/produits/${content.leftImgActive}.webp`)" alt="">
                  <img v-if="content.leftImgActive" class="duration-100 top object-contain bg-neutral-200 absolute w-full h-full rounded-sm" :src="require(`@/assets/produits/${content.leftImg}.webp`)" alt="">
                  <img v-if="!content.leftImgActive" class="duration-100 object-contain bg-neutral-200 absolute w-full h-full rounded-sm" :src="require(`@/assets/produits/${content.leftImg}.webp`)" alt="">
                </div>
                <div class="image_container relative w-full p-2 rounded border-solid border-2 border-black aspect-video duration-200 hover:p-1 sm:-left-6 sm:top-6 ">
                  <img v-if="content.rightImgActive" class="object-contain bg-neutral-200 absolute w-full h-full rounded-sm" :src="require(`@/assets/produits/${content.rightImgActive}.webp`)" alt="">
                  <img v-if="content.rightImgActive" class="duration-100 top object-contain bg-neutral-200 absolute w-full h-full rounded-sm" :src="require(`@/assets/produits/${content.rightImg}.webp`)" alt="">
                  <img v-if="!content.rightImgActive" class="duration-100 object-contain bg-neutral-200 absolute w-full h-full rounded-sm" :src="require(`@/assets/produits/${content.rightImg}.webp`)" alt="">
                </div>
              </div>
              <div v-if="content.modal">
                <Modal :contenttitle="content.type" :content="content.desc" :normes="content.normes" @close="content.modal = false" />
              </div>
              <button v-if="content.desc" @click="content.modal = true" class="py-2 px-8 bg-black text-white rounded font-light w-fit duration-200 hover:shadow-md hover:shadow-neutral-600 mt-4">En savoir plus</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Modal from '@/components/Modal.vue';

export default {
  props: ['id', 'name'],
  components: { Modal },
  data() {
    return {
      activeImage: false,
      categorys: [
        {
          name: 'Sérigraphie et broderie',
          desc: 'Desciption des produit de la categorie Sérigraphie et broderie',
          id: 1,
          contents: [
            {
              id: 1,
              type: 'Sérigraphie',
              leftImg: 'serigraphie_1',
              // leftImgActive: 'error',
              rightImg: 'serigraphie_2',
              // rightImgActive: 'error',
            },
            {
              id: 2,
              type: 'Broderie',
              leftImg: 'broderie_1',
              // leftImgActive: 'error',
              rightImg: 'error',
              // rightImgActive: 'error',
            },
            {
              id: 2,
              type: 'Transfert',
              leftImg: 'error',
              // leftImgActive: 'error',
              rightImg: 'error',
              // rightImgActive: 'error',
            },
          ],
        },
        {
          name: 'Tête',
          // desc: 'Les EPI pour la tête répondent à toute les normes present sur le marché ',
          id: 2,
          fourniseurs: [
            { name: 'Logo_Moldex' },
            { name: 'Logo_Univet' },
            { name: 'Logo_Rsg' },
            { name: 'Logo_Bellesafety' },
            { name: 'Logo_Coverguard' },
            { name: 'Logo_Singer' },
          ],
          contents: [
            {
              id: 1,
              type: 'Casques',
              leftImg: 'casque_1',
              // leftImgActive: 'error',
              rightImg: 'casque_2',
              // rightImgActive: 'error',
            },
            {
              id: 2,
              type: 'Casques anti bruits',
              leftImg: 'casque_anti_bruits_1',
              // leftImgActive: 'error',
              rightImg: 'casque_anti_bruits_2',
              // rightImgActive: 'error',
            },
            {
              id: 3,
              type: 'Lunettes et Lunettes a verre corecteur ',
              leftImg: 'lunette_et_lunette_a_verre_corecteur_1',
              // leftImgActive: 'error',
              rightImg: 'lunette_et_lunette_a_verre_corecteur_2',
              // rightImgActive: 'error',
            },
            {
              id: 4,
              type: 'Respiratoire',
              leftImg: 'respiratoire_1',
              // leftImgActive: 'error',
              rightImg: 'respiratoire_2',
              // rightImgActive: 'error',
            },
            {
              id: 5,
              type: 'Bouchon et Bouchon moulé',
              leftImg: 'bouchon_et_bouchon_moule_1',
              // leftImgActive: 'error',
              rightImg: 'bouchon_et_bouchon_moule_2',
              // rightImgActive: 'error',
            },
          ],
        },
        {
          name: 'Vêtements',
          desc: 'Desciption des produit de la categorie vetements',
          id: 3,
          fourniseurs: [
            { name: 'Logo_Newwave' },
            { name: 'Logo_Cepovett' },
            { name: 'Logo_Molinel' },
            // { name: 'Siggi' },
            { name: 'Logo_Chatard' },
            { name: 'Logo_Sioen' },
            { name: 'Logo_Lafont' },
            { name: 'Logo_Helly_Hanssen' },
            { name: 'Logo_Portwest' },
            { name: 'Logo_Fhb' },
            { name: 'Logo_BlakLader' },
          ],
          contents: [
            // {
            //   id: 1,
            //   type: 'Veste Sportswear',
            //   leftImg: 'veste_sportswear_1',
            //   // leftImg: 'error',
            //   // leftImgActive: 'error',
            //   rightImg: 'veste_sportswear_2_1',
            //   // rightImg: 'error',
            //   rightImgActive: 'veste_sportswear_2_2',
            // },
            {
              id: 1,
              type: 'Sportswear',
              leftImg: 'veste_sportswear_1',
              // leftImg: 'error',
              // leftImgActive: 'error',
              rightImg: 'pantalon_sportswear_1',
              // rightImg: 'error',
              // rightImgActive: 'error',
            },
            // {
            //   id: 2,
            //   type: 'Pantalon Sportswear',
            //   leftImg: 'pantalon_sportswear_1',
            //   // leftImgActive: 'error',
            //   rightImg: 'pantalon_sportswear_2',
            //   // rightImgActive: 'error',
            // },
            // {
            //   id: 3,
            //   type: 'Veste multirisques',
            //   desc: 'Ceci est une description de produit',
            //   normes: [
            //     { normeName: 'ISO 54' },
            //   ],
            //   leftImg: 'veste_mr_1',
            //   leftImgActive: 'veste_mr_1_2',
            //   rightImg: 'veste_mr_2',
            //   // rightImgActive: 'error',
            // },
            {
              id: 3,
              type: 'Multirisques',
              desc: 'Ceci est une description de produit',
              normes: [
                { normeName: 'ISO 54' },
              ],
              leftImg: 'veste_mr_1',
              leftImgActive: 'veste_mr_1_2',
              rightImg: 'pantalon_mr_1',
              rightImgActive: 'pantalon_mr_1_2',
            },
            // {
            //   id: 4,
            //   type: 'Pantalon multirisques',
            //   desc: 'Ceci est une description de produit',
            //   leftImg: 'pantalon_mr_1',
            //   leftImgActive: 'pantalon_mr_1_2',
            //   rightImg: 'pantalon_mr_2',
            //   // rightImgActive: 'error',
            // },
            // {
            //   id: 5,
            //   type: 'Veste Haute Visibilité',
            //   leftImg: 'veste_hv_1',
            //   // leftImgActive: 'error',
            //   rightImg: 'veste_hv_2',
            //   // rightImgActive: 'error',
            // },
            {
              id: 5,
              type: 'Haute Visibilité',
              leftImg: 'veste_hv_1',
              // leftImgActive: 'error',
              rightImg: 'patalon_hv_1',
              // rightImgActive: 'error',
            },
            // {
            //   id: 6,
            //   type: 'Pantalon Haute Visibilité',
            //   leftImg: 'patalon_hv_1',
            //   // leftImgActive: 'error',
            //   rightImg: 'patalon_hv_2',
            //   // rightImgActive: 'error',
            // },
            {
              id: 7,
              type: 'Vêtements imtemperies',
              leftImg: 'intemperie_1_1',
              leftImgActive: 'intemperie_1_2',
              rightImg: 'intemperie_2',
              // rightImgActive: 'error',
            },
            {
              id: 8,
              type: 'Parka',
              leftImg: 'parka_1_1',
              leftImgActive: 'parka_1_2',
              rightImg: 'parka_2',
              // rightImgActive: 'error',
            },
            {
              id: 9,
              type: 'Elagage',
              leftImg: 'elagage_1_1',
              leftImgActive: 'elagage_1_2',
              rightImg: 'elagage_2',
              // rightImgActive: 'error',
            },
            {
              id: 9,
              type: 'Usage Court',
              leftImg: 'usage_court_1',
              // leftImgActive: 'error',
              rightImg: 'usage_court_2',
              // rightImgActive: 'error',
            },
          ],
        },
        {
          name: 'Gant',
          desc: 'Desciption des produit de la categorie Gant',
          id: 4,
          fourniseurs: [
            { name: 'Logo_Coverguard' },
            { name: 'Logo_Activegear' },
            { name: 'Logo_Juba' },
            { name: 'Logo_Singer' },
            { name: 'Logo_Showa' },
          //   { name: 'ninja' },
          ],
          contents: [
            {
              id: 1,
              type: 'Manutention',
              leftImg: 'gant_manutention_1',
              // leftImgActive: 'error',
              rightImg: 'gant_manutention_2',
              // rightImgActive: 'error',
            },
            {
              id: 2,
              type: 'Anti coupure',
              leftImg: 'coupure_1',
              // leftImgActive: 'error',
              rightImg: 'coupure_2',
              // rightImgActive: 'error',
            },
            {
              id: 3,
              type: 'Chimie',
              leftImg: 'chimi_1',
              // leftImgActive: 'error',
              rightImg: 'chimi_2',
              // rightImgActive: 'error',
            },
            {
              id: 5,
              type: 'Cuir',
              leftImg: 'cuir_1',
              // leftImgActive: 'error',
              rightImg: 'cuir_2',
              // rightImgActive: 'error',
            },
            {
              id: 6,
              type: 'Chaleur',
              leftImg: 'chaleur_1',
              // leftImgActive: 'error',
              rightImg: 'chaleur_2',
              // rightImgActive: 'error',
            },
            {
              id: 7,
              type: 'Froid',
              leftImg: 'gant_froid_1',
              // leftImgActive: 'error',
              rightImg: 'gant_froid_2',
              // rightImgActive: 'error',
            },
            {
              id: 7,
              type: 'Alimentaire',
              leftImg: 'alimentaire_1',
              // leftImgActive: 'error',
              rightImg: 'alimentaire_2',
              // rightImgActive: 'error',
            },
          ],
        },
        {
          name: 'Pied',
          desc: 'A ce jour la protection de pieds pour étre conforme a la norme EN20345 ne suffit plus. Il est aussi nécessaire que les chaussures soient esthétiques et très confortables.',
          id: 5,
          fourniseurs: [
            // { name: 'Logo_Coverguard' },
            { name: 'Logo_Panther' },
            { name: 'Logo_Uniwork' },
            { name: 'Logo_Parade' },
            { name: 'Logo_Diadora' },
            { name: 'Logo_Jallatte' },
            { name: 'Logo_Cofra' },
            { name: 'Logo_Aboutblu' },
          ],
          contents: [
            {
              id: 1,
              type: 'Chaussure basse',
              leftImg: 'chaussure_basse_1',
              // leftImgActive: 'error',
              rightImg: 'chaussure_basse_2',
              // rightImgActive: 'error',
            },
            {
              id: 2,
              type: 'Chaussure BTP haute',
              leftImg: 'chaussure_btp_haute_1',
              // leftImgActive: 'error',
              rightImg: 'chaussure_btp_haute_2_2',
              rightImgActive: 'chaussure_btp_haute_2',
            },
            {
              id: 3,
              type: 'Chaussure BTP basse',
              leftImg: 'chaussure_btp_basse_1',
              // leftImgActive: 'error',
              rightImg: 'chaussure_btp_basse_2',
              rightImgActive: 'chaussure_btp_basse_2_2',
            },
            {
              id: 3,
              type: 'Botte',
              leftImg: 'botte_1',
              // leftImgActive: 'error',
              rightImg: 'botte_2_1',
              rightImgActive: 'botte_2_2',
            },
          ],
        },
        {
          name: 'Anti chute',
          desc: 'Desciption des produit de la categorie Anti chute',
          fourniseurs: [
            { name: 'Logo_Neofeu' },
          ],
          id: 6,
          contents: [
            {
              id: 1,
              type: 'Harnais',
              leftImg: 'harnai_1',
              // leftImgActive: 'error',
              rightImg: 'harnai_2',
              // rightImgActive: 'error',
            },
            {
              id: 1,
              type: 'Longe',
              leftImg: 'longe_1',
              // leftImgActive: 'error',
              rightImg: 'longe_2',
              // rightImgActive: 'error',
            },
          ],
        },
        {
          name: 'Hygiene',
          // desc: 'Desciption des produit de la categorie Hygiene',
          id: 6,
          contents: [
            {
              id: 1,
              type: 'Essuis tous',
              leftImg: 'essuis_tous_1',
              // leftImgActive: 'error',
              rightImg: 'essuis_tous_2',
              // rightImgActive: 'error',
            },
            {
              id: 2,
              type: 'Gel hydroalcolique',
              leftImg: 'gel_hydroalcolique_1',
              // leftImgActive: 'error',
              rightImg: 'gel_hydroalcolique_2',
              // rightImgActive: 'error',
            },
            {
              id: 3,
              type: 'Savon',
              leftImg: 'savon_1',
              // leftImgActive: 'error',
              rightImg: 'savon_2',
              // rightImgActive: 'error',
            },
          ],
        },
      ],
    };
  },
  methods: {
    showActiveImage() {
      this.activeImage = !this.activeImage;
    },
  },
};
</script>

<style>
.image_container:hover img.top {
  opacity: 0;
}
.fourniseur {
  grid-template-columns: repeat( auto-fit, minmax(100px, 1fr) );
}
@media screen and (max-width: 500px) {
  .fourniseur {
  grid-template-columns: repeat( auto-fit, minmax(80px, 1fr) );
}
}
</style>
