<template>
  <div class="backdrop fixed inset-0 z-10" @click.self="closeNavbar">
    <div class="absolute inset-10 shadow-2xl shadow-black/60 grid duration-200" :class="{'lg:left-1/2': !activeSubMenuProduits }">
      <!-- <div class="bg-white grid" :class="{'grid-cols-5': activeSubMenuProduits }"> -->
      <div class="bg-white flex justify-center">
        <!-- <div class="flex flex-col justify-center items-center gap-4" :class="{'col-span-2 bg-black text-white': activeSubMenuProduits }"> -->
        <div class="flex w-full flex-col justify-center items-center gap-4 duration-200" :class="{'bg-black text-white shadow-lg hidden lg:flex': activeSubMenuProduits }">
          <router-link @click.self="closeNavbar" class="text-4xl text-center w-1/2 bold duration-200 hover:-translate-x-2" to="/">Accueil</router-link>
          <button class="text-4xl text-center w-1/2 bold duration-200 hover:-translate-x-2" @click="openSubMenu" :class="{'underline underline-offset-4': activeSubMenuProduits }">Produits</button>
          <router-link @click.self="closeNavbar" class="text-4xl text-center w-1/2 bold duration-200 hover:-translate-x-2" to="/service">Services</router-link>
          <router-link @click.self="closeNavbar" class="text-4xl text-center w-1/2 bold duration-200 hover:-translate-x-2" to="/about">A propos</router-link>
          <router-link @click.self="closeNavbar" class="text-4xl text-center w-1/2 bold duration-200 hover:-translate-x-2" to="/contact">Contact</router-link>
        </div>
        <transition name="scaleX">
          <div v-if="activeSubMenuProduits" class="relative bg-white text-black w-full flex flex-col justify-center items-center gap-4 col-span-3 duration-300">
            <button @click.self="openSubMenu" class="absolute left-10 top-10 py-2 px-8 bg-black text-white rounded font-light w-fit">Retour</button>
            <router-link v-for="category in categorys" v-bind:key="category" @click="closeNavbar" class="text-4xl text-center min-w-full bold duration-200 hover:-translate-x-2" :to="{ name: 'ProductDetails', params: { nam: category.name, contents: category.contents }}">{{ category.name }}</router-link>
          </div>
        </transition>
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
      categorys1: [
        {
          name: 'Sérigraphie et broderie',
        },
        {
          name: 'Tete',
        },
        {
          name: 'Corps',
        },
        {
          name: 'Gant',
        },
        {
          name: 'Pieds',
        },
        {
          name: 'Anti chute',
        },
        {
          name: 'Hygiene',
        },
      ],
      categorys: [
        // {
        //   name: 'Sérigraphie et broderie',
        //   id: 1,
        //   contents: [
        //     {
        //       id: 1,
        //       type: 'Sérigraphie',
        //       leftImg: '',
        //       leftImgActive: 'https://media2.chasse-maree.com/boutique/22515-large_default/tee-shirt-serigraphie-coton.jpg',
        //       rightImg: 'https://via.placeholder.com/300x300/0f0',
        //       rightImgActive: 'https://via.placeholder.com/300x300/0a0',
        //     },
        //     {
        //       id: 2,
        //       type: 'Broderie',
        //       leftImg: 'https://via.placeholder.com/300x300/f2b',
        //       leftImgActive: 'https://via.placeholder.com/300x300/19e',
        //       rightImg: 'https://via.placeholder.com/300x300/0Fe',
        //       rightImgActive: 'https://via.placeholder.com/300x300/333',
        //     },
        //   ],
        // },
        // {
        //   name: 'Tete',
        //   id: 2,
        //   contents: [
        //     {
        //       id: 1,
        //       type: 'Casques',
        //       leftImg: 'https://via.placeholder.com/300x300/faa',
        //       leftImgActive: 'https://via.placeholder.com/300x300/ffa',
        //       rightImg: 'https://via.placeholder.com/300x300/aaf',
        //       rightImgActive: 'https://via.placeholder.com/300x300/aff',
        //     },
        //     {
        //       id: 2,
        //       type: 'Lunettes',
        //       comment: 'aussi disponible avec des verres correcteur',
        //       leftImg: 'https://via.placeholder.com/300x300/faa',
        //       leftImgActive: 'https://via.placeholder.com/300x300/ffa',
        //       rightImg: 'https://via.placeholder.com/300x300/aaf',
        //       rightImgActive: 'https://via.placeholder.com/300x300/aff',
        //     },
        //     {
        //       id: 3,
        //       type: 'Respiratoire',
        //       leftImg: 'https://via.placeholder.com/300x300/faa',
        //       leftImgActive: 'https://via.placeholder.com/300x300/ffa',
        //       rightImg: 'https://via.placeholder.com/300x300/aaf',
        //       rightImgActive: 'https://via.placeholder.com/300x300/aff',
        //     },
        //     {
        //       id: 4,
        //       type: 'Casques anti bruits',
        //       leftImg: 'https://via.placeholder.com/300x300/faa',
        //       leftImgActive: 'https://via.placeholder.com/300x300/ffa',
        //       rightImg: 'https://via.placeholder.com/300x300/aaf',
        //       rightImgActive: 'https://via.placeholder.com/300x300/aff',
        //     },
        //   ],
        // },
        {
          name: 'Corps',
          id: 3,
          contents: [
            // {
            //   id: 1,
            //   type: 'Vetements Haute Visibiliter',
            //   leftImg: 'https://via.placeholder.com/300x300/faa',
            //   leftImgActive: 'https://via.placeholder.com/300x300/ffa',
            //   rightImg: 'https://via.placeholder.com/300x300/aaf',
            //   rightImgActive: 'https://via.placeholder.com/300x300/aff',
            // },
            // {
            //   id: 2,
            //   type: 'Vetements normé multirisques',
            //   leftImg: 'https://via.placeholder.com/300x300/faa',
            //   leftImgActive: 'https://via.placeholder.com/300x300/ffa',
            //   rightImg: 'https://via.placeholder.com/300x300/aaf',
            //   rightImgActive: 'https://via.placeholder.com/300x300/aff',
            // },
            {
              id: 3,
              type: 'Vetements de travail pant',
              leftImg: 'Vetements_de_travail_pant1',
              leftImgActive: 'Vetements_de travail_pant1_active',
              rightImg: 'https://via.placeholder.com/300x300/aaf',
              rightImgActive: 'https://via.placeholder.com/300x300/aff',
            },
            {
              id: 4,
              type: 'Vetements de travail T-shirt',
              leftImg: 'Vetements_de_travail_T-shirt1',
              leftImgActive: 'Vetements_de_travail_T-shirt1',
              rightImg: 'Vetements_de_travail_T-shirt2',
              rightImgActive: 'Vetements_de_travail_T-shirt2_active',
            },
            // {
            //   id: 5,
            //   type: 'Vetements de travail Parka',
            //   leftImg: 'https://via.placeholder.com/300x300/faa',
            //   leftImgActive: 'https://via.placeholder.com/300x300/ffa',
            //   rightImg: 'https://via.placeholder.com/300x300/aaf',
            //   rightImgActive: 'https://via.placeholder.com/300x300/aff',
            // },
            // {
            //   id: 6,
            //   type: 'Vetements imtemperie',
            //   leftImg: 'https://via.placeholder.com/300x300/faa',
            //   leftImgActive: 'https://via.placeholder.com/300x300/ffa',
            //   rightImg: 'https://via.placeholder.com/300x300/aaf',
            //   rightImgActive: 'https://via.placeholder.com/300x300/aff',
            // },
            // {
            //   id: 7,
            //   type: 'Elagage',
            //   leftImg: 'https://via.placeholder.com/300x300/faa',
            //   leftImgActive: 'https://via.placeholder.com/300x300/ffa',
            //   rightImg: 'https://via.placeholder.com/300x300/aaf',
            //   rightImgActive: 'https://via.placeholder.com/300x300/aff',
            // },
            // {
            //   id: 8,
            //   type: 'Usage court',
            //   leftImg: 'https://via.placeholder.com/300x300/faa',
            //   leftImgActive: 'https://via.placeholder.com/300x300/ffa',
            //   rightImg: 'https://via.placeholder.com/300x300/aaf',
            //   rightImgActive: 'https://via.placeholder.com/300x300/aff',
            // },
          ],
        },
        // {
        //   name: 'Gant',
        //   id: 4,
        //   contents: [
        //     {
        //       id: 1,
        //       type: 'Manutention',
        //       leftImg: 'https://via.placeholder.com/300x300/faa',
        //       leftImgActive: 'https://via.placeholder.com/300x300/ffa',
        //       rightImg: 'https://via.placeholder.com/300x300/aaf',
        //       rightImgActive: 'https://via.placeholder.com/300x300/aff',
        //     },
        //     {
        //       id: 2,
        //       type: 'Anti coupure',
        //       leftImg: 'https://via.placeholder.com/300x300/faa',
        //       leftImgActive: 'https://via.placeholder.com/300x300/ffa',
        //       rightImg: 'https://via.placeholder.com/300x300/aaf',
        //       rightImgActive: 'https://via.placeholder.com/300x300/aff',
        //     },
        //     {
        //       id: 3,
        //       type: 'CHimie',
        //       leftImg: 'https://via.placeholder.com/300x300/faa',
        //       leftImgActive: 'https://via.placeholder.com/300x300/ffa',
        //       rightImg: 'https://via.placeholder.com/300x300/aaf',
        //       rightImgActive: 'https://via.placeholder.com/300x300/aff',
        //     },
        //     {
        //       id: 4,
        //       type: 'Chimie',
        //       leftImg: 'https://via.placeholder.com/300x300/faa',
        //       leftImgActive: 'https://via.placeholder.com/300x300/ffa',
        //       rightImg: 'https://via.placeholder.com/300x300/aaf',
        //       rightImgActive: 'https://via.placeholder.com/300x300/aff',
        //     },
        //     {
        //       id: 5,
        //       type: 'Cuir',
        //       leftImg: 'https://via.placeholder.com/300x300/faa',
        //       leftImgActive: 'https://via.placeholder.com/300x300/ffa',
        //       rightImg: 'https://via.placeholder.com/300x300/aaf',
        //       rightImgActive: 'https://via.placeholder.com/300x300/aff',
        //     },
        //     {
        //       id: 6,
        //       type: 'Chaleur',
        //       leftImg: 'https://via.placeholder.com/300x300/faa',
        //       leftImgActive: 'https://via.placeholder.com/300x300/ffa',
        //       rightImg: 'https://via.placeholder.com/300x300/aaf',
        //       rightImgActive: 'https://via.placeholder.com/300x300/aff',
        //     },
        //     {
        //       id: 7,
        //       type: 'Froid',
        //       leftImg: 'https://via.placeholder.com/300x300/faa',
        //       leftImgActive: 'https://via.placeholder.com/300x300/ffa',
        //       rightImg: 'https://via.placeholder.com/300x300/aaf',
        //       rightImgActive: 'https://via.placeholder.com/300x300/aff',
        //     },
        //   ],
        // },
        // {
        //   name: 'Pieds',
        //   id: 5,
        //   contents: [
        //     {
        //       id: 1,
        //       type: 'Chaussure basse',
        //       leftImg: 'https://via.placeholder.com/300x300/faa',
        //       leftImgActive: 'https://via.placeholder.com/300x300/ffa',
        //       rightImg: 'https://via.placeholder.com/300x300/aaf',
        //       rightImgActive: 'https://via.placeholder.com/300x300/aff',
        //     },
        //     {
        //       id: 2,
        //       type: 'Chaussure haute',
        //       leftImg: 'https://via.placeholder.com/300x300/faa',
        //       leftImgActive: 'https://via.placeholder.com/300x300/ffa',
        //       rightImg: 'https://via.placeholder.com/300x300/aaf',
        //       rightImgActive: 'https://via.placeholder.com/300x300/aff',
        //     },
        //     {
        //       id: 3,
        //       type: 'Botte',
        //       leftImg: 'https://via.placeholder.com/300x300/faa',
        //       leftImgActive: 'https://via.placeholder.com/300x300/ffa',
        //       rightImg: 'https://via.placeholder.com/300x300/aaf',
        //       rightImgActive: 'https://via.placeholder.com/300x300/aff',
        //     },
        //   ],
        // },
        // {
        //   name: 'Anti chute',
        //   id: 6,
        //   contents: [
        //     {
        //       id: 1,
        //       type: 'Je sais pas',
        //       leftImg: 'https://via.placeholder.com/300x300/faa',
        //       leftImgActive: 'https://via.placeholder.com/300x300/ffa',
        //       rightImg: 'https://via.placeholder.com/300x300/aaf',
        //       rightImgActive: 'https://via.placeholder.com/300x300/aff',
        //     },
        //   ],
        // },
        // {
        //   name: 'Hygiene',
        //   id: 6,
        //   contents: [
        //     {
        //       id: 1,
        //       type: 'Masque FFP2',
        //       leftImg: 'https://via.placeholder.com/300x300/faa',
        //       leftImgActive: 'https://via.placeholder.com/300x300/ffa',
        //       rightImg: 'https://via.placeholder.com/300x300/aaf',
        //       rightImgActive: 'https://via.placeholder.com/300x300/aff',
        //     },
        //     {
        //       id: 2,
        //       type: 'Masque chiurgiko mgl',
        //       leftImg: 'https://via.placeholder.com/300x300/faa',
        //       leftImgActive: 'https://via.placeholder.com/300x300/ffa',
        //       rightImg: 'https://via.placeholder.com/300x300/aaf',
        //       rightImgActive: 'https://via.placeholder.com/300x300/aff',
        //     },
        //     {
        //       id: 3,
        //       type: 'Essuis tous',
        //       leftImg: 'https://via.placeholder.com/300x300/faa',
        //       leftImgActive: 'https://via.placeholder.com/300x300/ffa',
        //       rightImg: 'https://via.placeholder.com/300x300/aaf',
        //       rightImgActive: 'https://via.placeholder.com/300x300/aff',
        //     },
        //   ],
        // },
      ],
    };
  },
  methods: {
    openSubMenu() {
      this.activeSubMenuProduits = !this.activeSubMenuProduits;
      console.log(this.activeSubMenuProduits);
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
.scaleX-enter-active {
  transition: all .2s ease-out;
}
.scaleX-leave-active {
  transition: all .2s ease-in;
}
</style>
