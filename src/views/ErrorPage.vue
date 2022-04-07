<template>
  <div class="error pt-10">
    <div class="">
      <div class="py-64 m-auto max-w-screen-lg px-7 flex flex-col gap-8">
        <div class="grid grid-cols-3">
          <div class="col-span-2 flex flex-col gap-4">
            <p class="text-2xl">Erreur 404</p>
            <p>Nous somme désolés la page à laquelle vous essayer d'accéder n'existe pas.</p>
            <p>
              Retournez à l'accueil :
              <router-link class="ml-auto py-2 px-8 bg-black text-white rounded font-light w-fit mt-auto duration-200 hover:shadow-md hover:shadow-neutral-600" to="/">Accueil</router-link>
            </p>
          </div>
          <div>
            <svg class="h-32 mx-auto" viewBox="0 0 517 257" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M74.4961 51.4999C48.1683 48.8601 36.0826 48.7501 25.9961 54.4999C59.1894 83.1041 65.9015 91.2884 61.4961 94.9999C57.523 99.1665 49.9395 99.6943 34.4961 99.9999C21.6086 100.374 15.4944 102.013 8.49614 110C-3.00904 127.471 -0.36106 133.454 9.4999 143.5C12.9999 147.065 27.9993 140.782 35.4993 138.5C59.4993 131.197 61.4961 144.5 72.9993 146.5C83.2838 148.288 100.996 144.5 100.996 144.5H425.496C454.32 144.913 464.951 150.315 470.996 172C479 220 336 264.5 328.996 188C322.826 174.82 320.5 169 308 169C300.981 169 286.5 177 290.5 201.5C297.357 243.5 377.5 273 446.5 247C502.314 225.969 539.5 158 499.496 128C532 65 457.38 21.1542 385.996 26.9999C307.973 36.4614 266.616 46.9858 194.996 70.4999C192.5 43 161 39.223 159.496 30.9999C155.891 11.2871 153.882 -0.668421 149.996 0.499868C143.172 1.57228 137.602 7.41189 124.996 25.9999C100.955 32.1305 89.396 37.248 74.4961 51.4999Z" fill="black"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>

</style>
