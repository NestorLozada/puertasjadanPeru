<script setup>
// example components
import DefaultInfoCard from "../../../../examples/cards/infoCards/DefaultInfoCard.vue";
import CenteredBlogCard from "../../../../examples/cards/blogCards/CenteredBlogCard.vue";
import imgBuiltekLogo from "../../../../assets/logos/builtek_1.png"
</script>
<template>
  <section class="py-7">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="row justify-content-start">
            <DefaultInfoCard
              color="info"
              icon="public"
              title="Calidad y Experiencia"
              description="Builtek al ser proveedor certificado de Agta Record se encuentra entre 
              los principales fabricantes mundiales de sistemas de puertas automáticas."
            />
            <DefaultInfoCard
              color="info"
              icon="payments"
              title="Instalacion y Mantenimiento"
              description="Builtek se enorgullece de su gama de servicios de mantenimiento, que garantizan 
              que las puertas automáticas de registro funcionen de manera eficaz en todo el mundo."
            />
          </div>
          <div class="row justify-content-start mt-4">
            <DefaultInfoCard
              color="info"
              icon="apps"
              title="Alta gama de productos"
              description="La gama de productos incluye puertas correderas, plegables, giratorias y giratorias, 
              puertas herméticas e higiénicas, entre muchos otros."
            />
            <DefaultInfoCard
              color="info"
              icon="3p"
              title="Satisfacción al cliente"
              description="Nos dedicamos a ofrecer un servicio de calidad para fortalecer relaciones y ganar la 
              confianza de nuestros clientes."
            />
          </div>
        </div>
        <div class="col-lg-4 ms-auto mt-lg-0 mt-6">
          <CenteredBlogCard
            :image="imgBuiltekLogo"
            title="Pongase en contacto"
            description="Atencion de calidad enfocada en la necesidad del cliente. Atencion las 24/7"
          />
        </div>
      </div>
    </div>
  </section>
</template>
