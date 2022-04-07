<template>
  <div class="bg-black">
    <div class="py-10 mt-10 m-auto max-w-screen-lg px-7 flex flex-col gap-8 text-white">
      <h2 class="text-4xl">Contactez nous</h2>
      <div class="bg-white p-8 rounded text-black flex flex-col gap-4">
        <div v-show="errors.length">
          <transition-group tag="ul" name="errors" class="errors flex flex-col gap-1">
            <li v-for="error in errors" v-bind:key="error" class="bg-red-200 px-2 py-1 rounded duration-200">{{ error }}</li>
          </transition-group>
        </div>
        <div v-if="messageSend">
          <p class="bg-green-200 px-2 py-1 rounded duration-200">Message envoyé avec succes</p>
        </div>
        <form class="grid grid-cols-2 gap-4" @submit.prevent="submit" novalidate="true">
          <div class="flex flex-wrap text-left gap-2 col-span-2 sm:col-span-1 sm:flex-col md:flex-row ">
            <label class="w-max" for="name">Nom :</label>
            <input class="border-b-2 border-neutral-900 px-2 w-full max-w-xs duration-200 sm:w-auto" type="text" id="name" name="name" required v-model="name">
          </div>
          <div class="flex flex-wrap text-left gap-2 col-span-2 sm:col-span-1 sm:flex-col md:flex-row ">
            <label class="w-max" for="company">Entreprise :</label>
            <input class="border-b-2 border-neutral-900 px-2 w-full max-w-xs duration-200 sm:w-auto" type="text" id="company" name="company" required v-model="company">
          </div>
          <div class="flex flex-wrap text-left gap-2 col-span-2 sm:col-span-1 sm:flex-col md:flex-row ">
            <label class="w-max" for="email">Email :</label>
            <input class="border-b-2 border-neutral-900 px-2 w-full max-w-xs duration-200 sm:w-auto" type="email" id="email" name="email" required v-model="email">
          </div>
          <div class="flex flex-wrap text-left gap-2 col-span-2 sm:col-span-1 sm:flex-col md:flex-row ">
            <label class="w-max" for="tel">Téléphone : </label>
            <!-- <label class="w-max" for="tel">Téléphone : <span class="text-xs scale-110 inline-block -translate-y-2">Optionnel</span></label> -->
            <input class="border-b-2 border-neutral-900 px-2 w-full max-w-xs duration-200 sm:w-auto" type="tel" id="tel" name="tel" v-model="tel">
          </div>
          <div class="grid text-left gap-2 col-span-2">
            <label class="w-fit mb-2" for="message">Message :</label>
            <textarea class="resize-y" name="message" id="message" cols="30" rows="4" required v-model="message"></textarea>
          </div>
          <div class="grid text-left gap-2 col-span-2">
            <input class="cursor-pointer py-2 px-8 ml-auto bg-black text-white rounded font-light w-fit mt-auto duration-200 hover:shadow-md hover:shadow-neutral-600" type="submit" value="Envoyer">
          </div>
        </form>
        <p class="text-3xl w-max mx-auto font-medium text-center">
          Ou alors
        </p>
        <div class="flex flex-wrap gap-8">
          <p class="flex flex-wrap gap-4 items-center">
            <b>Telephone : </b>
            <a class="select-all py-1 px-2 md:px-8 border-2 border-black rounded font-light w-fit mt-auto duration-200 text-center hover:shadow-md hover:shadow-neutral-600" href="tel:0475692979">04 75 69 29 79</a>
          </p>
          <p class="flex flex-wrap gap-4 items-center">
            <b>Email : </b>
            <a class="select-all py-1 px-2 md:px-8 border-2 border-black rounded font-light w-fit mt-auto duration-200 text-center hover:shadow-md hover:shadow-neutral-600" href="mailto:contact@phoenix-vetements.com">contact@phoenix-vetements.com</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 2s ease;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  transition: opacity 2s ease;
}

.errors-enter-from, .errors-leave-to {
  opacity: 0;
  transform: scale(0);
}
.errors-enter-to {
  transform: scale(1);
}
.errors-active {
  transition: transform 2s ease;
}
textarea{
  background-image: url("../assets/form_line.png");
  image-rendering: -webkit-optimize-contrast;
  background-repeat: repeat space;
  max-height: 384px;
}
</style>
<script>
import smtp from '@/custome_scripts/smtp';

export default {
  data() {
    return {
      errors: [],
      messageSend: false,
      name: null,
      company: null,
      email: null,
      tel: null,
      message: null,
    };
  },
  methods: {
    checkForm() {
      if (this.name && this.company && this.email && this.validEmail(this.email) && this.message && !(this.message.length <= 20) && !this.messageSend) {
        this.errors = [];
        return true;
      }
      console.log(this.messageSend);
      this.errors = [];
      if (this.messageSend) {
        this.errors.push('Le message a déjà été envoyé attendais quelques secondes.');
      }
      if (!this.name) {
        this.errors.push('Le champ Nom doit être rempli.');
      }
      if (!this.company) {
        this.errors.push('Le champ Entreprise doit être rempli.');
      }
      if (!this.email) {
        this.errors.push('Le champ Email doit être rempli.');
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Une adresse email valide est requise.');
      }
      if (!this.message) {
        this.errors.push('Le champ Message doit être rempli.');
      } else if (this.message.length <= 20) {
        this.errors.push('Le champ Message doit contenir plus de 20 caractères.');
      }
      return false;
    },
    validEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    submit() {
      if (!this.checkForm()) {
        return;
      }
      this.sendEmail();
    },
    sendEmail() {
      smtp.send({
        Host: 'smtp.gmail.com',
        Username: 'wanerd2@gmail.com',
        Password: 'qjgwacsljxwhykjr',
        // Host: 'smtp.ionos.fr',
        // Username: 'website@phoenix-vetements.com',
        // Password: 'bJdz2T?8G6FUTx;',
        // Password: 'Pvpphoenix18',
        // To: 'contact@phoenix-vetements.com',
        To: 'wanerd2@gmail.com',
        From: 'website@phoenix-vetements.com',
        Subject: 'Formulaire SiteWeb',
        Body: `<html><h2>${this.name} - ${this.company}</h2><p style="font-size: 14px; margin: 0;"><strong>email : ${this.email}</strong></p><p style="font-size: 14px; margin: 0;"><strong>tel : ${this.tel}</strong></p><br></br><pre style="font-size: 14px;  margin: 0;"><strong>message : </strong><br>${this.message}</pre></html>`,
      }).then(
        (message) => this.verifEmailSending(message),
      );
    },
    verifEmailSending(message) {
      console.log(message);
      if (message === 'OK') {
        this.messageSend = true;
        console.log('is send');
        // eslint-disable-next-line
        setTimeout(() => {
          this.messageSend = false;
          this.errors = [];
          console.log(this.messageSend);
        }, 10000);
      } else {
        this.errors.push('Une erreur durant l\'envoi est survenue, réessayée !');
      }
    },
  },
};
</script>
