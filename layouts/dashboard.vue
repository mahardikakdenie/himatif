<template>
  <main class="flex">
    <!--  -->
    <div class="w-full">
      <sidebar />

      <main>
        <div class="max-w-90rem mx-modify px-4 sm:px-6 md:px-8">
          <!-- Replace with your content -->
          <div class="py-4">
            <Nuxt />
          </div>
          <!-- /End replace -->
        </div>
      </main>
    </div>
    <!--  -->
  </main>
</template>

<script>
export default {
  components: {
    sidebar: () => import("./section/sidebar.vue"),
    mainView: () => import("./section/view.vue"),
  },
};
</script>

<style>
.mx-modify {
  margin: 0 1.75rem 0 19.75rem;
}
</style>
