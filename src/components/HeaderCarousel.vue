<template>
  <div class="bg-black">
    <div class="py-0 px-0 sm:py-10 sm:px-11 gap-8 text-white relative">
      <div>
        <button aria-label="image precedente" class="scale-125 absolute top-1/2 -translate-y-1/2 hover:-translate-x-1 left-2 sm:left-4 h-24 w-4 z-10 duration-200" @click="previous()">
          <svg class="max-h-full stroke-[4px] stroke-black sm:stroke-white sm:stroke-2" viewBox="0 0 21 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5 48L1 24.5L19.5 1" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
          <div class="relative h-[60vh] overflow-hidden">
              <h1 class="z-10 absolute top-20 font-bold md:top-4 left-4 text-xl md:text-4xl backdrop-blur-md rounded-2xl p-2 px-4" >Expert en EPI et Vêtements de travail</h1>
            <div class="slide-container flex h-full">
              <div id="firstClone" class="slide w-full flex-none">
                <img class="bg-neutral-700 object-cover w-screen h-[70vh]" :src="require(`../assets/${slides[slidesLength].link}.webp`)" alt="">
              </div>
              <div class="slide w-full flex-none" v-for="slide in slides" v-bind:key="slide.position">
                <img class="bg-neutral-700 object-cover w-screen h-[70vh]" :src="require(`../assets/${slide.link}.webp`)" alt="">
              </div>
              <div id="lastClone" class="slide w-full flex-none">
                <img class="bg-neutral-700 object-cover w-screen h-[70vh]" :src="require(`../assets/${slides[0].link}.webp`)" alt="">
              </div>
            </div>
          </div>
        <button aria-label="image suivante" class="scale-125 absolute top-1/2 -translate-y-1/2 hover:translate-x-1 right-2 sm:right-4 h-24 w-4 z-10 duration-200" @click="next()">
          <svg class="rotate-180 max-h-full stroke-[4px] stroke-black sm:stroke-white sm:stroke-2" viewBox="0 0 21 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5 48L1 24.5L19.5 1" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
      <div class="absolute left-0 right-0 sm:left-auto sm:right-11 z-10 bottom-0 sm:bottom-3 lg:bottom-8 overflow-hidden sm:w-2/3 md:1/2 lg:w-1/3">
        <div class="slide-container-text flex">
          <div class="slide-text pb-4 flex-none  w-full flex flex-col-reverse bg-gradient-to-t from-black sm:bg-none px-2">
            <p class="text-4xl sm:text-right ">{{ slides[slidesLength].text }}</p>
          </div>
          <div class="slide-text pb-4 flex-none w-full flex flex-col-reverse bg-gradient-to-t from-black sm:bg-none px-2" v-for="slide in slides" v-bind:key="slide.position">
            <p class="text-4xl sm:text-right ">{{ slide.text }}</p>
          </div>
          <div class="slide-text pb-4 flex-none w-full flex flex-col-reverse bg-gradient-to-t from-black sm:bg-none px-2">
            <p class="text-4xl sm:text-right ">{{ slides[0].text }}</p>
          </div>
        </div>
      </div>
      <svg class="absolute hidden sm:block inset-x-0 bottom-2 sm:bottom-7 h-1/4 w-full" viewBox="0 0 1080 512" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
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
      counter: 1,
      slidesLength: 0,
    };
  },
  methods: {
    next() {
      const slide = document.querySelectorAll('.slide');
      if (this.counter >= slide.length - 1) return;
      const slideContainer = document.querySelector('.slide-container');
      slideContainer.style.transition = 'transform 0.4s ease-in-out';
      this.counter += 1;
      const size = slide[0].offsetWidth;
      slideContainer.style.transform = `translateX(${-size * this.counter}px)`;
      // --
      const slideText = document.querySelectorAll('.slide-text');
      const slideContainerText = document.querySelector('.slide-container-text');
      slideContainerText.style.transition = 'transform 0.4s ease-in-out';
      const sizeText = slideText[0].offsetWidth;
      slideContainerText.style.transform = `translateX(${-sizeText * this.counter}px)`;
    },
    previous() {
      if (this.counter <= 0) return;
      const slideContainer = document.querySelector('.slide-container');
      slideContainer.style.transition = 'transform 0.4s ease-in-out';
      this.counter -= 1;
      const slide = document.querySelectorAll('.slide');
      const size = slide[0].offsetWidth;
      slideContainer.style.transform = `translateX(${-size * this.counter}px)`;
      const slideText = document.querySelectorAll('.slide-text');
      const slideContainerText = document.querySelector('.slide-container-text');
      slideContainerText.style.transition = 'transform 0.4s ease-in-out';
      const sizeText = slideText[0].offsetWidth;
      slideContainerText.style.transform = `translateX(${-sizeText * this.counter}px)`;
    },
  },
  mounted() {
    setInterval(this.next, 8000);
    this.slidesLength = this.slides.length - 1;
    const slideContainer = document.querySelector('.slide-container');
    const slide = document.querySelectorAll('.slide');
    const slideContainerText = document.querySelector('.slide-container-text');
    const slideText = document.querySelectorAll('.slide-text');
    setTimeout(() => {
      const size = slide[0].offsetWidth;
      slideContainer.style.transform = `translateX(${-size * this.counter}px)`;
      const sizeText = slideText[0].offsetWidth;
      slideContainerText.style.transform = `translateX(${-sizeText * this.counter}px)`;
    }, 100);
    slideContainer.addEventListener('transitionend', () => {
      if (slide[this.counter].id === 'firstClone') {
        slideContainer.style.transition = 'none';
        slideContainerText.style.transition = 'none';
        this.counter = slide.length - 2;
        const size = slide[0].offsetWidth;
        slideContainer.style.transform = `translateX(${-size * this.counter}px)`;
        const sizeText = slideText[0].offsetWidth;
        slideContainerText.style.transform = `translateX(${-sizeText * this.counter}px)`;
      }
      if (slide[this.counter].id === 'lastClone') {
        slideContainer.style.transition = 'none';
        slideContainerText.style.transition = 'none';
        this.counter = slide.length - this.counter;
        const size = slide[0].offsetWidth;
        slideContainer.style.transform = `translateX(${-size * this.counter}px)`;
        const sizeText = slideText[0].offsetWidth;
        slideContainerText.style.transform = `translateX(${-sizeText * this.counter}px)`;
      }
    });
    window.addEventListener('resize', () => {
      const size = slide[0].offsetWidth;
      slideContainer.style.transform = `translateX(${-size * this.counter}px)`;
      const sizeText = slideText[0].offsetWidth;
      slideContainerText.style.transform = `translateX(${-sizeText * this.counter}px)`;
    });
  },
};
</script>

<style>
</style>
