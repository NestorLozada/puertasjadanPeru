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
                  route: './productos',
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
              title="Full Documentation"
              description="Built by developers for developers. Check the foundation and
                  you will find everything inside our documentation."
            />
            <DefaultInfoCard
              icon="flip_to_front"
              title="Bootstrap 5 Ready"
              description="The world’s most popular front-end open source toolkit,
                  featuring Sass variables and mixins."
            />
          </div>
          <div class="row justify-content-start mt-5">
            <DefaultInfoCard
              class="mt-3"
              icon="price_change"
              title="Save Time & Money"
              description="Creating your design from scratch with dedicated designers can
                be very expensive. Start with our Design System."
            />
            <DefaultInfoCard
              class="mt-3"
              icon="devices"
              title="Fully Responsive"
              description="Regardless of the screen size, the website content will
                  naturally fit the given resolution."
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
