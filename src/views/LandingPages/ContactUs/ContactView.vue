<script setup>
import { ref, onMounted } from "vue";
import emailjs from "emailjs-com";

//example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";

//material components
import MaterialInput from "@/components/MaterialInput.vue";
//import MaterialTextArea from "@/components/MaterialTextArea.vue";
import MaterialButton from "@/components/MaterialButton.vue";

// material-input
import setMaterialInput from "@/assets/js/material-input";
const name = ref("");
const email = ref("");
const message = ref("");

onMounted(() => {
  setMaterialInput();
});
const sendEmail = () => {
  console.log("Valores antes de enviar:", {
    name: name.value,
    email: email.value,
    message: message.value,
  });
  const templateParams = {
    name: name.value,
    email: email.value,
    message: message.value,
  };
  emailjs
    .send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_USER_ID
    )
    .then(
      (response) => {
        console.log("Correo enviado exitosamente:", response);
        alert("Correo enviado exitosamente");
      },
      (error) => {
        console.error("Error al enviar correo:", error);
        alert("Hubo un error al enviar el correo");
      }
    );
};
</script>
<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <DefaultNavbar
          :sticky="true"
          :action="{
            route: 'https://www.creative-tim.com/product/vue-material-kit-pro',
            color: 'bg-gradient-success',
            label: 'Buy Now',
          }"
        />
      </div>
    </div>
  </div>
  <section>
    <div class="page-header min-vh-100">
      <div class="container">
        <div class="row mt-7">
          <div
            class="card d-flex blur justify-content-center shadow-lg my-sm-0 my-sm-6 mt-15 mb-5"
          >
            <div
              class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent"
            >
              <div
                class="bg-gradient-success shadow-success border-radius-lg p-3"
              >
                <h3 class="text-white text-success mb-0">Contactanos</h3>
              </div>
            </div>
            <div class="card-body">
              <p class="pb-3">
                Para mayores preguntas, puedes enviarnos un correo a
                martinjadano@gmail.com o llenar el siguiente formulario
              </p>
              <form id="contact-form" method="post" autocomplete="off">
                <div class="card-body p-0 my-3">
                  <div class="row">
                    <div class="col-md-6">
                      <MaterialInput
                        v-model="name"
                        class="input-group-static mb-4"
                        type="text"
                        label="Nombre Completo"
                        placeholder="Nombre Completo"
                      />
                    </div>
                    <div class="col-md-6 ps-md-2">
                      <MaterialInput
                        v-model="email"
                        class="input-group-static mb-4"
                        type="email"
                        label="Email"
                        placeholder="hola@builtek.com"
                      />
                    </div>
                  </div>
                  <div class="form-group mb-0 mt-md-0 mt-4">
                    <textarea
                      v-model="message"
                      class="form-control"
                      placeholder="Describe tu problema en al menos 250 caracteres"
                      rows="6"
                    ></textarea>
                  </div>
                  <div class="row">
                    <div class="col-md-12 text-center">
                      <MaterialButton
                        variant="gradient"
                        color="success"
                        class="mt-3 mb-0"
                        @click.prevent="sendEmail"
                      >
                        Enviar mensaje
                      </MaterialButton>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <DefaultFooter />
</template>
