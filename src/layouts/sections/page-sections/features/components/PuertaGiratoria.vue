<script setup>
import AboutUsOption from "@/views/LandingPages/components/AboutUsOption.vue";
import puertaGiratoriaImg from "../../../../../assets/logos/producto-7.jpg";
</script>
<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 my-auto">
          <img
            :src="puertaGiratoriaImg"
            :alt="title"
            class="img-fluid border-radius-lg"
          />
        </div>
        <div class="col-lg-6 mt-lg-0 mt-5 ps-lg-0 ps-0">
          <AboutUsOption
            icon="mediation"
            content="Nuestras puertas giratorias son seguramente los productos <br />
            más sofisticados de nuestra presentación, no solo porque sus dimensiones <br />
            son excepcionales, sino porque las innovaciones tecnológicas en materia <br />
            de seguridad son el resultado de años de investigación constante."
          />
          <AboutUsOption
            icon="settings_overscan"
            content="Record K 21 tiene unos estándares de seguridad únicos,<br />
             gracias a sus hojas correderas, siendo suministrada en cualquier <br />
             color RAL  o con acabado anodizado así como en latón, aluminio, <br />
             acero inoxidable o un acabado total de vidrio que tiene una <br />
             estética especialmente transparente."
          />

          <AboutUsOption
            icon="token"
            content="El diámetro interno puede ser elegido por cliente, siendo la <br />
            máxima capacidad de hasta 80 personas por minuto; este modelo es ideal para <br />
            usuarios con sillas de ruedas y para carros de la compra."
          />
          <AboutUsOption
            icon="settings"
            content="El modelo estándar viene equipado con una puerta corredera <br />
            automática y dos vitrinas, opcionalmente se puede pedir con un segmento fijo, <br />
            integrado en la puerta abatible de doble sentido, y también sin vitrina."
          />
        </div>
      </div>
    </div>
  </section>
</template>
