<script setup>
import AboutUsOption from "@/views/LandingPages/components/AboutUsOption.vue";
import puertaTelescopica from "../../../../../assets/logos/puertaTelescopica.jpg";
</script>
<template>
  <section class="">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 my-auto">
          <img
            :src="puertaTelescopica"
            :alt="title"
            class="img-fluid border-radius-lg"
          />
        </div>
        <div class="col-lg-6 mt-lg-0 mt-5 ps-lg-0 ps-0">
          <AboutUsOption
            icon="mediation"
            content="Siguiendo nuestra línea de diseño hemos creado nuestras <br />
            puertas correderas telescópicas de dos o cuatro hojas móviles."
          />
          <AboutUsOption
            icon="settings_overscan"
            content="El sistema de record 20 permite la construcción de una <br />
            enorme gama de modelos de puertas. Diseñado usando principios <br />
            de construcción modulares, puede adaptarse a una amplia gama de <br />
            condiciones. Su rápida instalación reduce los costes de mantenimiento y servicios."
          />

          <AboutUsOption
            icon="token"
            content="El mecanismo para puerta corredera telescópica record  <br />
            TSA 20 es ideal para pasos estrechos donde no habría suficiente  <br />
            anchura de apertura para una puerta corredera normal.  <br />
            Las entradas estrechas no son un problema para el mecanismo  <br />
            record TSA 20 ya que abre de forma rápida y  extremadamente silenciosa."
          />

          <AboutUsOption
            icon="home"
            content="En comparación a las puertas correderas clásicas, <br />
            debido a que las hojas son más pequeñas, requieren un <br />
            espacio aproximadamente 30 % menor y pueden cubrir amplitudes <br />
            de apertura particularmente grandes de hasta 4.000 mm."
          />
        </div>
      </div>
    </div>
  </section>
</template>
