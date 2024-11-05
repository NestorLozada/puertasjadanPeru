<script setup>
import AboutUsOption from "@/views/LandingPages/components/AboutUsOption.vue";
import puertaFlipFlowImg from "../../../../../assets/logos/producto-6.jpg";
</script>
<template>
  <section >
    <div class="container">
      <div class="row">
        <div class="col-lg-6 my-auto">
          <img
            :src="puertaFlipFlowImg"
            :alt="title"
            class="img-fluid border-radius-lg"
          />
        </div>
        <div class="col-lg-6 mt-lg-0 mt-5 ps-lg-0 ps-0">
          <AboutUsOption
            icon="mediation"
            content="RECORD FlipFlow… garantiza un alto nivel de <br />
            seguridad en una amplia gama de aplicaciones."
          />
          <AboutUsOption
            icon="settings_overscan"
            content="FlipFlow, fácil de usar y de una sola <br />
            dirección de tráfico, permite un alto volumen <br />
             de rendimiento, sin poner en peligro el acceso controlado."
          />
        </div>
      </div>
    </div>
  </section>
</template>
