<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";

// Features page components
import FeatureOne from "./components/PuertaHermetica.vue";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="Puerta Telescopica"
    :breadcrumb="[
      { label: 'Productos', route: '/productos' },
      { label: 'Puerta Telescopica' },
    ]"
  >
    <FeatureOne />
  </BaseLayout>
</template>
