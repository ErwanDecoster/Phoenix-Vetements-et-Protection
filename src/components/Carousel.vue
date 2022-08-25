<template>
  <div id="carousel" class="w-full relative">
    <button class="absolute top-1/2 -translate-y-1/2 hover:-translate-x-1 -left-6 h-24 w-4 duration-200" @click="previous()">
      <svg class="max-h-full" viewBox="0 0 21 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.5 48L1 24.5L19.5 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <div class="slides relative w-full p-2 rounded border-solid border-2 border-white aspect-video duration-200 hover:p-1">
      <div class="absolute overflow-hidden w-full h-full">
        <transition-group tag="div" class="carousel flex justify-center items-center overflow-hidden h-full ">
          <div class="slide flex-1 h-full justify-center items-cente duration-200" v-for="slide in slides" v-bind:key="slide.position">
            <img class="bg-neutral-200 mx-auto h-full w-full aspect-video rounded-sm object-cover" :src="require(`../assets/${slide.link}.jpg`)" alt="">
          </div>
        </transition-group>
      </div>
    </div>
    <button class="absolute top-1/2 -translate-y-1/2 hover:translate-x-1 -right-8 h-24 w-4 duration-200" @click="next()">
      <svg class="rotate-180 max-h-full" viewBox="0 0 21 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.5 48L1 24.5L19.5 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: ['slides2'],
  data() {
    return {
      slides: this.slides2,
    };
  },
  methods: {
    next() {
      const first = this.slides.shift();
      this.slides = this.slides.concat(first);
    },
    previous() {
      const last = this.slides.pop();
      this.slides = [last].concat(this.slides);
    },
  },
  mounted() {
    const carousel = document.querySelector('.carousel');
    carousel.style.width = `calc(100% * ${this.slides.length})`;
    carousel.classList.add(`translate-x-[-${100 / this.slides.length}%]`);
  },
};
</script>

<style>
.imageNext-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.imageNext-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.imageNext-enter-active {
  transition: all .2s ease-out;
}
.imageNext-leave-active {
  transition: all .2s ease-in;
}
.slide:first-of-type {
  opacity: 0;
}
.slide:last-of-type {
  opacity: 0;
}
</style>
