<script setup>
import DefaultCounterCard from "../../../examples/cards/counterCards/DefaultCounterCard.vue";
</script>

<template>
  <section class="pt-3 pb-4" id="count-stats">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 z-index-2 border-radius-xl mx-auto py-3">
          <div class="row">
            <div class="col-md-4 position-relative">
              <DefaultCounterCard
                color="success"
                title="Puertas operando"
                description="Contamos con una gran cantidad de puertas operando al rededor del Ecuador
                "
                :count="70"
                suffix="+"
                :duration="3000"
                divider="vertical"
              />
            </div>
            <div class="col-md-4 position-relative">
              <DefaultCounterCard
                color="success"
                title="Clientes"
                description="Nuestros clientes avalan la calidad de nuestro trabajo, respaldando 
                  cada proyecto con su satisfacción y confianza."
                :count="15"
                suffix="+"
                :duration="3000"
                divider="vertical"
              />
            </div>
            <div class="col-md-4">
              <DefaultCounterCard
                color="success"
                title="Variedad de puertas"
                description="Ofrecemos una amplia variedad de puertas
                con especificaciones y características que se adaptan a sus necesidades"
                :count="7"
                :duration="3000"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
