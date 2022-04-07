<template>
  <div class="bg-black">
    <div class="py-10 px-11 gap-8 text-white relative">
      <div>
        <button class="scale-125 absolute top-1/2 -translate-y-1/2 hover:-translate-x-1 left-4 h-24 w-4 z-10 duration-200" @click="previous()">
          <svg class="max-h-full" viewBox="0 0 21 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5 48L1 24.5L19.5 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
          <div class="relative h-[60vh] overflow-hidden">
            <transition-group tag="div" class="img_carousel flex justify-center items-center overflow-hidden h-full">
              <div class="slide h-full justify-center items-cente duration-200" v-for="slide in slides" v-bind:key="slide.position">
                <img class="bg-neutral-200 object-cover w-screen h-[70vh]" :src="require(`../assets/${slide.link}.webp`)" alt="">
                <!-- object-top -->
              </div>
            </transition-group>
          </div>
        <button class="scale-125 absolute top-1/2 -translate-y-1/2 hover:translate-x-1 right-4 h-24 w-4 z-10 duration-200" @click="next()">
          <svg class="rotate-180 max-h-full" viewBox="0 0 21 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5 48L1 24.5L19.5 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      <div class="absolute right-11 z-10 bottom-10 lg:bottom-16 overflow-hidden">
        <transition-group tag="div" class="text_carousel flex justify-center items-center overflow-hidden">
          <div class="slide h-full flex-1 justify-center items-cente" v-for="slide in slides" v-bind:key="slide.position">
            <p class="text-4xl text-right delay-75 duration-200">{{ slide.text }}</p>
          </div>
        </transition-group>
      </div>
      <svg class="absolute inset-x-0 bottom-7 h-1/4 w-full" viewBox="0 0 1080 512" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M1080 512H0L1080 0V512Z" fill="black"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: ['headerCarousel'],
  data() {
    return {
      slides: this.headerCarousel,
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
    const intervalId = setInterval(this.next, 8000);
    console.log(intervalId);
    const Carousels = document.querySelectorAll('.img_carousel,.text_carousel');
    Carousels.forEach((Carousel) => {
      const el = Carousel;
      el.style.width = `calc(100% * ${this.slides.length})`;
      el.classList.add(`translate-x-[-${100 / this.slides.length}%]`);
    });
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
  /* opacity: 0; */
}
.slide:last-of-type {
  /* opacity: 0; */
}
</style>
