<script setup>
import RotatingCard from "../../../examples/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "../../../examples/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "../../../examples/cards/rotatingCards/RotatingCardBack.vue";
import DefaultInfoCard from "../../../examples/cards/infoCards/DefaultInfoCard.vue";
import imgTest from "@/assets/logos/producto-4.jpg";
import imgTest2 from "@/assets/logos/puertaTelescopica.jpg";
</script>
<template>
  <section class="my-5 py-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-4">
          <RotatingCard>
            <RotatingCardFront
              :image="imgTest"
              icon="touch_app"
              title="Productos de <br /> alta gama"
              description="Nuestros productos son de la más alta calidad, ideal para todo tipo de ambiente
              y para todo tipo de uso."
            />

            <RotatingCardBack
              :image="imgTest2"
              title="Descubre más"
              description="Encuentra lo que buscas en nuestra gama de productos de calidad."
              :action="[
                {
                  route: './productosall',
                  label: 'Productos',
                },
              ]"
            />
          </RotatingCard>
        </div>
        <div class="col-lg-6 ms-auto">
          <div class="row justify-content-start">
            <DefaultInfoCard
              icon="content_copy"
              title="Innovacion"
              description="Innova en tu negocio con soluciones que brindan seguridad
              y mantienen la elegancia, capturando la atención de tus clientes desde el primer momento."
            />
            <DefaultInfoCard
              icon="security"
              title="Seguridad"
              description="Nuestras puertas y sistemas automáticos ofrecen máxima seguridad y prevención de riesgos, brindando protección confiable para cada espacio."
            />
          </div>
          <div class="row justify-content-start mt-5">
            <DefaultInfoCard
              class="mt-3"
              icon="price_change"
              title="Invierte en lo mejor"
              description="Somos líderes en nuestro sector, enfocados en satisfacer
               las necesidades de nuestros clientes y comprometidos a garantizar su total satisfacción."
            />
            <DefaultInfoCard
              class="mt-3"
              icon="people"
              title="Personal altamente capacitado"
              description="Nuestro personal está completamente capacitado para manejar situaciones de alto estrés, garantizando siempre la calidad y la eficiencia."
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
