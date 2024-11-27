<script setup>
import { ref, onMounted } from "vue";
import emailjs from "emailjs-com";

//material components
import MaterialInput from "@/components/MaterialInput.vue";
// import MaterialTextArea from "@/components/MaterialTextArea.vue";
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
</template>
