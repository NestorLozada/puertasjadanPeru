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
              title="Puerta <br /> Plegable"
              description="All the Bootstrap components that you need in a development have been
        re-design with the new look."
            />

            <RotatingCardBack
              :image="imgTest2"
              title="Descubre más"
              description="You will save a lot of time going from prototyping to full-functional
                code because all elements are implemented."
              :action="[
                {
                  route: './/sections/page-sections/hero-sections.html',
                  label: 'Start with Headers',
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
