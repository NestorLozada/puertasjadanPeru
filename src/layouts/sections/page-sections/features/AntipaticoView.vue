<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";

// Features page components
import PuertaAntipatico from "./components/PuertaAntipatico.vue";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="Puerta Antipaico"
    :breadcrumb="[
      { label: 'Productos', route: '/productos' },
      { label: 'Puerta Antipaico' },
    ]"
  >
    <PuertaAntipatico />
  </BaseLayout>
</template>
