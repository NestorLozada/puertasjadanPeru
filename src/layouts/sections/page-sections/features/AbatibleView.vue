<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";

// Features page components
import PuertaAbatible from "./components/PuertaAbatible.vue";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="Puerta Abatible"
    :breadcrumb="[
      { label: 'Productos', route: '/productos' },
      { label: 'Puerta Abatible' },
    ]"
  >
    <PuertaAbatible />
  </BaseLayout>
</template>
