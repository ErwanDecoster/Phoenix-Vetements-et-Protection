import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './index.css';
import './registerServiceWorker';
// import ScrollAnination from './custome_scripts/scrollAnimation';
// require('./custome_scripts/carousel.js');
// import * as mykey from './custome_scripts/carousel.js';

// import './custome_scripts/carousel.js';
// export default ScrollAnination

createApp(App).use(router).mount('#app');
