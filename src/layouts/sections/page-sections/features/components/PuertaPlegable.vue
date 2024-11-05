<script setup>
import AboutUsOption from "@/views/LandingPages/components/AboutUsOption.vue";
import puertaPlegable from "../../../../../assets/logos/producto-5.jpg";
</script>
<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 my-auto">
          <img
            :src="puertaPlegable"
            :alt="title"
            class="img-fluid border-radius-lg"
          />
        </div>
        <div class="col-lg-6 mt-lg-0 mt-5 ps-lg-0 ps-0">
          <AboutUsOption
            icon="mediation"
            content="La anchura de paso puede mantenerse prácticamente íntegra. <br />
             Una puerta plegable automática puede renovar una antigua instalación de <br />
             forma relativamente sencilla. En función de la anchura total, <br />
             la puerta plegable se monta como variante de uno o de dos lados."
          />
          <AboutUsOption
            icon="settings_overscan"
            content="En el campo de la gastronomía, record FTA 20 se encuentra <br />
            en los pasos entre la cocina y el comedor o por ejemplo, como separación <br />
            de los recintos de fumadores que han surgido durante los últimos años."
          />

          <AboutUsOption
            icon="token"
            content="Poco antes de llegar a la posición de cierre, la puerta de desplaza <br />
            hacia abajo y hacia la pared unos milímetros, ejerciendo así una fuerte <br />
            presión sobre las juntas. La motorización en ese punto del recorrido <br />
            incrementa su potencia para poder lograr una perfecta estanqueidad <br />
            contra las superficies de sellado.  "
          />
          <AboutUsOption
            icon="home"
            content="Las puertas FTA están especialmente indicadas en pasillos estrechos <br />
             de restaurantes, hoteles, comercios, hospitales y geriátricos, <br />
             así como en edificios de oficinas y viviendas."
          />
        </div>
      </div>
    </div>
  </section>
</template>
