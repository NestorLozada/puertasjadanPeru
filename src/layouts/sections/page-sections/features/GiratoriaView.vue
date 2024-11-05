<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";

// Features page components
import PuertaGiratoria from "./components/PuertaGiratoria.vue";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="Puerta Giratoria"
    :breadcrumb="[
      { label: 'Productos', route: '/productos' },
      { label: 'Puerta Giratoria' },
    ]"
  >
    <PuertaGiratoria />
  </BaseLayout>
</template>
