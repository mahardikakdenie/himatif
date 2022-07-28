<template>
  <div
    class="h-1/2 py-80 text-white bg-center bg-cover text-26px flex justify-center items-center font-semibold"
    style="background-image: url('/banner/tentang.png')"
  >
    <section class="w-full sm:w-1/12 md:w-9/12 xl:w-8/12 flex justify-center">
      <h1 class="text-6xl text-center font-bold text-white">{{ text }}</h1>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: () => "Tentang Himatif",
    },
  },
  computed: {
    // banner() {
    //   return this.$store.state.customerStory;
    // },
  },
};
</script>
