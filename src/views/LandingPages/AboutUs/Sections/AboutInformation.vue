<script setup>
// example components
import DefaultInfoCard from "../../../../examples/cards/infoCards/DefaultInfoCard.vue";
import CenteredBlogCard from "../../../../examples/cards/blogCards/CenteredBlogCard.vue";
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
              title="satisfacción del cliente"
              description="We get insulted by others, lose trust for those We get back
                  freezes"
            />
          </div>
        </div>
        <div class="col-lg-4 ms-auto mt-lg-0 mt-6">
          <CenteredBlogCard
            image="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            title="Pongase en contacto"
            description="Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards."
          />
        </div>
      </div>
    </div>
  </section>
</template>
