<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";

// Features page components
import PuertaPlegable from "./components/PuertaPlegable.vue";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="Puerta Plegable"
    :breadcrumb="[
      { label: 'Productos', route: '/productos' },
      { label: 'Puerta Plegable' },
    ]"
  >
    <PuertaPlegable />
  </BaseLayout>
</template>
