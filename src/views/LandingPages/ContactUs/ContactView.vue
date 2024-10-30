<script setup>
import { onMounted } from "vue";

//example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";

//material components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialTextArea from "@/components/MaterialTextArea.vue";
import MaterialButton from "@/components/MaterialButton.vue";

// material-input
import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
  setMaterialInput();
});
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
                <h3 class="text-white text-success mb-0">Contact us</h3>
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
                        class="input-group-static mb-4"
                        type="text"
                        label="Nombre Completo"
                        placeholder="Nombre Completo"
                      />
                    </div>
                    <div class="col-md-6 ps-md-2">
                      <MaterialInput
                        class="input-group-static mb-4"
                        type="email"
                        label="Email"
                        placeholder="hola@builtek.com"
                      />
                    </div>
                  </div>
                  <div class="form-group mb-0 mt-md-0 mt-4">
                    <MaterialTextArea
                      id="message"
                      class="input-group-static mb-4"
                      :rows="6"
                      placeholder="Describe your problem in at least 250 characters"
                      >¿Como podermos ayudarte?
                    </MaterialTextArea>
                  </div>
                  <div class="row">
                    <div class="col-md-12 text-center">
                      <MaterialButton
                        variant="gradient"
                        color="success"
                        class="mt-3 mb-0"
                        >Enviar mensaje</MaterialButton
                      >
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
