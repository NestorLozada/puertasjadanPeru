<script setup>
import AboutUsOption from "@/views/LandingPages/components/AboutUsOption.vue";
import puertaAntipaticoImg from "../../../../../assets/logos/sliding-door.jpg";
</script>
<template>
  <section class="">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 my-auto">
          <img
            :src="puertaAntipaticoImg"
            :alt="title"
            class="img-fluid border-radius-lg"
          />
        </div>
        <div class="col-lg-6 mt-lg-0 mt-5 ps-lg-0 ps-0">
          <AboutUsOption
            icon="mediation"
            content="El sistema de apertura integral record TOS 20 permite <br />
             girar las hojas de las puertas y las partes laterales 90º hacia el exterior."
          />
          <AboutUsOption
            icon="settings_overscan"
            content="La apertura integral se logra con un simple empuje desde <br />
            el interior y en cualquiera que sea la posición de las hojas. <br />
            Disponen de una guías de suelo especialmente diseñadas para un <br />
            funcionamiento extramadamente silencioso, situadas unicamente <br />
            por detrás de las partes laterales."
          />

          <AboutUsOption
            icon="token"
            content="Estas guías empotradas en suelo, evitan que se puedan <br />
            tropezar contra ellas en los casos de evacuaciones masivas."
          />
        </div>
      </div>
    </div>
  </section>
</template>
