<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";

// Features page components
import PuertaFlipFlow from "./components/PuertaFlipFlow.vue";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="Puerta FlipFlow"
    :breadcrumb="[
      { label: 'Productos', route: '/productos' },
      { label: 'Puerta FlipFlow' },
    ]"
  >
    <PuertaFlipFlow />
  </BaseLayout>
</template>
