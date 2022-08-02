<template>
  <div class="backdrop fixed inset-0 z-30 flex flex-col content-center justify-center" @click.self="closeModal">
    <div class="bg-white flex flex-col gap-2 justify-center w-[98%] max-h-[98%] md:w-4/5 xl:w-3/5 mx-auto p-8 md:p-12 lg:p-20 drop-shadow-2xl rounded-lg relative">
      <p class="text-xl font-bold">{{ contenttitle }} - Informations</p>
      <p class="overflow-y-scroll" v-html="content"></p>
      <p v-if="normes" class="font-semibold">Normes :</p>
      <ul class="flex flex-wrap gap-4">
        <li class="font-bold text-amber-400 grid items-center justify-items-center" v-for="norme in normes" v-bind:key="norme">
          <img v-if="norme.img" class="w-8 md:w-10" :src="require(`../assets/produits/normes/${norme.img}.png`)" alt="">
          <p>{{ norme.normeName }}</p>
        </li>
      </ul>
      <button @click="closeModal" class="close_button absolute h-14 w-14 top-4 right-4 duration-200 hover:rotate-45">
        <span class="h-1 w-3/4 block rotate-45 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-black"></span>
        <span class="h-1 w-3/4 block -rotate-45 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-black"></span>
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Navbar',
  props: ['contenttitle', 'content', 'normes'],
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>
<style>
.close_button span {
  content: '';
}
</style>
