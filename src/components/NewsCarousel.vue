<template>
  <div class="bg-black">
    <div class="py-10 m-auto max-w-screen-lg px-16 lg:px-7 flex flex-col gap-8 text-white relative">
      <p class="text-left text-xl font-semibold">Actualité</p>
      <button aria-label="image precedente" class="absolute top-1/2 -translate-y-1/2 hover:-translate-x-1 left-4 lg:-left-12 h-24 w-4 scale-150 duration-200 z-10" @click="previous()">
        <svg class="max-h-full" viewBox="0 0 21 49" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.5 48L1 24.5L19.5 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="overflow-hidden">
        <div class="slide-container flex flex-nowrap">
          <div id="firstClone" class="slidee bg-black grid grid-cols-1 md:grid-cols-2 gap-8 flex-none w-full px-1">
            <div class="w-full flex flex-col gap-2">
              <h2 class="text-left text-xl font-semibold">
                {{ slides[slidesLength].title }}
              </h2>
              <p class="w-full text-m text-left">
                {{ slides[slidesLength].content }}
              </p>
              <a class="text-blue-200 hover:text-blue-400 duration-200 inline" v-show="slides[slidesLength].link" :href="'http://' + slides[slidesLength].link">{{ slides[slidesLength].link }}</a>
            </div>
            <div v-if="slides[slidesLength].image" class="w-full relative">
              <img class="mx-auto aspect-video border-2 border-white rounded object-cover max-h-72 " :src="require(`@/assets/${slides[2].image}.webp`)" alt="">
            </div>
            <div v-if="slides[slidesLength].video" class="w-full relative">
              <iframe class="mx-auto w-full aspect-video border-2 border-white rounded object-cover max-h-72 " :src="slides[slidesLength].video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
          <div class="slidee bg-black grid grid-cols-1 md:grid-cols-2 gap-8 flex-none w-full px-1" v-for="slide in slides" v-bind:key="slide.title">
            <div class="w-full flex flex-col gap-2">
              <h2 class="text-left text-xl font-semibold">
                {{ slide.title }}
              </h2>
              <p v-html="slide.content" class="w-full text-m text-left">
              </p>
              <a class="text-blue-200 hover:text-blue-400 duration-200 inline" v-show="slide.link" :href="'http://' + slide.link">{{ slide.link }}</a>
            </div>
            <div v-if="slide.image" class="w-full relative">
              <img class="mx-auto aspect-video border-2 border-white rounded object-cover max-h-72 " :src="require(`@/assets/${slide.image}.webp`)" alt="">
            </div>
            <div v-if="slide.video" class="w-full relative">
              <iframe class="mx-auto w-full aspect-video border-2 border-white rounded object-cover max-h-72 " :src="slide.video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
          <div id="lastClone" class="slidee bg-black grid grid-cols-1 md:grid-cols-2 gap-8 flex-none w-full px-1">
            <div class="w-full flex flex-col gap-2">
              <h2 class="text-left text-xl font-semibold">
                {{ slides[0].title }}
              </h2>
              <p class="w-full text-m text-left" style="white-space: pre-wrap;">
                {{ slides[0].content }}
              </p>
              <a class="text-blue-200 hover:text-blue-400 duration-200 inline" v-show="slides[0].link" :href="'http://' + slides[0].link">{{ slides[0].link }}</a>
            </div>
            <div v-if="slides[0].image" class="w-full relative">
              <img class="mx-auto aspect-video border-2 border-white rounded object-cover max-h-72 " :src="require(`@/assets/${slides[0].image}.webp`)" alt="">
            </div>
            <div v-if="slides[0].video" class="w-full relative">
              <iframe class="mx-auto w-full aspect-video border-2 border-white rounded object-cover max-h-72 " :src="slides[0].video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
      <button aria-label="image suivante" class="absolute top-1/2 -translate-y-1/2 hover:translate-x-1 right-4 lg:-right-12 h-24 w-4 scale-150 duration-200 z-10" @click="next()">
        <svg class="rotate-180 max-h-full" viewBox="0 0 21 49" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.5 48L1 24.5L19.5 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['NewsSlide'],
  data() {
    return {
      slides: this.NewsSlide,
      counter: 1,
      slidesLength: 0,
    };
  },
  methods: {
    next() {
      const slide = document.querySelectorAll('.slidee');
      if (this.counter >= slide.length - 1) return;
      const slideContainer = document.querySelector('.slide-container');
      slideContainer.style.transition = 'transform 0.4s ease-in-out';
      this.counter += 1;
      const size = slide[0].offsetWidth;
      slideContainer.style.transform = `translateX(${-size * this.counter}px)`;
    },
    previous() {
      if (this.counter <= 0) return;
      const slideContainer = document.querySelector('.slide-container');
      slideContainer.style.transition = 'transform 0.4s ease-in-out';
      this.counter -= 1;
      const slide = document.querySelectorAll('.slidee');
      const size = slide[0].offsetWidth;
      slideContainer.style.transform = `translateX(${-size * this.counter}px)`;
    },
  },
  mounted() {
    this.slidesLength = this.slides.length - 1;
    const slideContainer = document.querySelector('.slide-container');
    const slide = document.querySelectorAll('.slidee');
    setTimeout(() => {
      const size = slide[0].offsetWidth;
      slideContainer.style.transform = `translateX(${-size * this.counter}px)`;
    }, 100);
    slideContainer.addEventListener('transitionend', () => {
      if (slide[this.counter].id === 'firstClone') {
        slideContainer.style.transition = 'none';
        this.counter = slide.length - 2;
        const size = slide[0].offsetWidth;
        slideContainer.style.transform = `translateX(${-size * this.counter}px)`;
      }
      if (slide[this.counter].id === 'lastClone') {
        slideContainer.style.transition = 'none';
        this.counter = slide.length - this.counter;
        const size = slide[0].offsetWidth;
        slideContainer.style.transform = `translateX(${-size * this.counter}px)`;
      }
    });
    window.addEventListener('resize', () => {
      const size = slide[0].offsetWidth;
      slideContainer.style.transform = `translateX(${-size * this.counter}px)`;
    });
  },
};
</script>

<style>

</style>
