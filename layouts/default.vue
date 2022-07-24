<template>
  <div>
    <Headers />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
export default {
  components: {
    Headers: () => import("./section/Headers.vue"),
    Footer: () => import("./section/Footer.vue"),
  },
};
</script>
