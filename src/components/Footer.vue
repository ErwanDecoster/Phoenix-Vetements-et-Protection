<template>
  <div class="bg-neutral-100 static bottom-0 inset-x-0 shadow-xl shadow-neutral-500 fill-black">
    <div class="py-10 m-auto max-w-screen-lg px-7 flex flex-col gap-8">
      <div class="flex justify-around gap-10 flex-wrap">
        <div class="flex-1">
          <p class="font-bold text-center">Nos reseaux :</p>
          <ul class="mt-4 flex flex-col">
            <li class="mx-auto min-w-max">
              <a href="https://www.facebook.com/phoenixvetements/" class="px-4 py-2 mx-auto text-center hover:underline decoration-neutral-700 underline-offset-2 flex gap-3 items-center">
                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z"/>
                </svg>
                <p>Facebook</p>
              </a>
            </li>
            <li class="mx-auto min-w-max">
              <a href="https://www.linkedin.com/company/phoenix-vetements-et-protection/" class="px-4 py-2 mx-auto text-center hover:underline decoration-neutral-700 underline-offset-2 flex gap-3 items-center">
                <svg class="h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <path d="M0 5h3.578v11H0zM13.324 5.129c-.038-.012-.074-.025-.114-.036a2.32 2.32 0 00-.145-.028A3.207 3.207 0 0012.423 5c-2.086 0-3.409 1.517-3.845 2.103V5H5v11h3.578v-6s2.704-3.766 3.845-1v7H16V8.577a3.568 3.568 0 00-2.676-3.448z"/>
                  <circle cx="1.75" cy="1.75" r="1.75"/>
                </svg>
                <p>linkedin</p>
              </a>
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <p class="font-bold text-center">Société :</p>
          <ul class="mt-4 flex flex-col gap-1">
            <li class="mx-auto min-w-max">
              <router-link class="block px-4 py-2 text-center hover:underline decoration-neutral-700 underline-offset-2 " to="/legalnotice">Mentions légales</router-link>
            </li>
            <li class="mx-auto min-w-max">
              <router-link class="block px-4 py-2 text-center hover:underline decoration-neutral-700 underline-offset-2 " to="/about">A propos</router-link>
            </li>
            <li class="mx-auto min-w-max">
              <router-link class="block px-4 py-2 text-center hover:underline decoration-neutral-700 underline-offset-2 " to="/contact">Contact</router-link>
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <p class="font-bold text-center">Téléchargeable :</p>
          <ul class="mt-4 flex flex-col">
            <li class="mx-auto min-w-max">
              <a :href="`${publicPath}documents/catalogue_hygiène.pdf`" class="block px-4 py-2 text-center hover:underline decoration-neutral-700 underline-offset-2 ">Catalogue Hygiene</a>
            </li>
            <li class="mx-auto min-w-max">
              <a :href="`${publicPath}documents/catalogue_epi.pdf`" class="block px-4 py-2 text-center hover:underline decoration-neutral-700 underline-offset-2 ">Catalogue Fournisseur</a>
              <button class="block px-4 py-2 text-center hover:underline decoration-neutral-700 underline-offset-2 "></button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
  mounted() {
    this.downloadFile();
  },
  methods: {
    downloadFile() {
      axios({
        url: 'http://localhost:8000/catalogue_hygiène.pdf', // File URL Goes Here
        method: 'GET',
        responseType: 'blob',
      }).then((res) => {
        const FILE = window.URL.createObjectURL(new Blob([res.data]));

        const docUrl = document.createElement('x');
        docUrl.href = FILE;
        docUrl.setAttribute('download', 'file.pdf');
        document.body.appendChild(docUrl);
        docUrl.click();
      });
    },
  },
};
</script>
