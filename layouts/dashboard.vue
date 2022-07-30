<template>
  <div>
    <!--  -->
    <sidebar />
    <main>
      <div class="py-6">
        <Nuxt />
      </div>
    </main>
    <!--  -->
  </div>
</template>

<script>
export default {
  components: {
    sidebar: () => import("./section/sidebar.vue"),
  },
};
</script>

<style></style>
