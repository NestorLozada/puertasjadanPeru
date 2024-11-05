<script setup>
import AboutUsOption from "@/views/LandingPages/components/AboutUsOption.vue";
import PuertaAbatible from "@/assets/logos/PuertaAbatible.jpg";

</script>
<template>
  <section class="">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 my-auto">
          <img
            :src="PuertaAbatible"
            :alt="title"
            class="img-fluid border-radius-lg"
          />
        </div>
        <div class="col-lg-6 mt-lg-0 mt-5 ps-lg-0 ps-0">
          <AboutUsOption
            icon="mediation"
            content="Sus cualidades de resistencia se deben principalmente <br />
            a su construcción electromecánica reforzada."
          />
          <AboutUsOption
            icon="settings_overscan"
            content="El operador asocia una tecnología <br />
            de vanguardia que combinan tres elementos <br />
            de ingeniería para lograr un funcionamiento <br />
            perfecto y duradero."
          />

          <AboutUsOption
            icon="token"
            content="El motor de uso intensivo, un muelle potente y <br />
            reforzado y una leva específica para cada <br />
            tipo de puerta y de apertura"
          />
        </div>
      </div>
    </div>
  </section>
</template>
