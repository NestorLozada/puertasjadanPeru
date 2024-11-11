<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../../layouts/sections/components/BaseLayout.vue";
import ProductosCatalogs from "../../../layouts/sections/productos/ProductosCatalog.vue";
import data from "../../Presentation/Sections/Data/designBlocksData";
// nav-pills
import setNavPills from "@/assets/js/nav-pills.js";

// hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="Productos"
    :breadcrumb="[
      { label: 'Inicio', route: '/' },
      { label: 'Todos los productos' },
    ]"
  >
    <ProductosCatalogs :data="data" />
  </BaseLayout>
</template>
