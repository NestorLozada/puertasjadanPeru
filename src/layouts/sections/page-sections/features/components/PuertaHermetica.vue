<script setup>
import AboutUsOption from "@/views/LandingPages/components/AboutUsOption.vue";
import puertaHermetica from "../../../../../assets/logos/producto-4.jpg";
</script>
<template>
  <section class="py-9">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 my-auto">
          <img
            :src="puertaHermetica"
            :alt="title"
            class="img-fluid border-radius-lg"
          />
        </div>
        <div class="col-lg-6 mt-lg-0 mt-5 ps-lg-0 ps-0">
          <AboutUsOption
            icon="mediation"
            content="Las puertas correderas herméticas record CLEAN® <br />
            deslizan por un carril especial que le permite aplastar <br />
            las juntas de la hoja contra los marcos de pared a <br />
            la vez que cae contra el suelo para sellar la parte <br />
            inferior con otra junta de estanqueidad.  "
          />
          <AboutUsOption
            icon="settings_overscan"
            content="La hoja montada sobre levas giratorias reduce la fricción <br />
            y minimizan el ruido"
          />

          <AboutUsOption
            icon="token"
            content="Poco antes de llegar a la posición de cierre, la puerta de <br />
            desplaza hacia abajo y hacia la pared unos milímetros, ejerciendo así una <br />
            fuerte presión sobre las juntas. La motorización en ese punto del recorrido <br />
            incrementa su potencia para poder lograr una perfecta estanqueidad contra las <br />
            superficies de sellado.  "
          />
        </div>
      </div>
    </div>
  </section>
</template>
