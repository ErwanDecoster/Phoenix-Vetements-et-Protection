<template>
  <div class="bg-black">
    <div class="py-10 m-auto max-w-screen-lg px-16 lg:px-7 flex flex-col gap-8 text-white relative">
      <p class="text-left text-xl font-semibold">Actualité</p>
      <button class="absolute top-1/2 -translate-y-1/2 hover:-translate-x-1 left-4 lg:-left-12 h-24 w-4 scale-150 duration-200" @click="previous()">
        <svg class="max-h-full" viewBox="0 0 21 49" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.5 48L1 24.5L19.5 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="relative overflow-hidden">
        <transition-group tag="div" class="carousel flex justify-center items-center overflow-hidden h-full">
          <div class="slide flex-1 grid grid-cols-1 md:grid-cols-2 justify-items-center gap-x-28 gap-y-10 relative duration-200" @click="console.log('click')" v-for="slide in slides" v-bind:key="slide.title">
            <div class="w-full flex flex-col gap-2">
              <h2 class="text-left text-xl font-semibold">
                {{ slide.title }}
              </h2>
              <p class="w-full text-m text-left">
                {{ slide.content }}
              </p>
            </div>
            <div v-show="slide.secondeContentType === 'img'" class="w-full relative">
              <img class="mx-auto aspect-video border-2 border-white rounded object-cover max-h-72 " src="" alt="">
            </div>
            <div v-show="slide.secondeContentType === 'video'" class="w-full relative">
              <iframe class="mx-auto w-full aspect-video border-2 border-white rounded object-cover max-h-72 " src="https://www.youtube-nocookie.com/embed/F95lcd44qFE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </transition-group>
      </div>
      <button class="absolute top-1/2 -translate-y-1/2 hover:translate-x-1 right-4 lg:-right-12 h-24 w-4 scale-150 duration-200" @click="next()">
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
      carouselAnimate: true,
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
    if (this.carouselAnimate) {
      const intervalId = setInterval(this.next, 1000);
      console.log(intervalId);
    }
    const carousel = document.querySelector('.carousel');
    carousel.style.width = `calc(100% * ${this.slides.length})`;
    carousel.classList.add(`translate-x-[-${100 / this.slides.length}%]`);
    // translate-x-[-33%]
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
