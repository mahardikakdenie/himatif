<template>
  <form @submit.prevent="submit" class="text-left w-300px">
    <div class="mt-1 flex border rounded-lg border-black">
      <input
        v-model="text"
        name="search"
        id="search"
        class="shadow-sm focus:ring-none active:ring-none focus:border-0 outline-none block w-full sm:text-sm border-0 px-2 py-2"
        placeholder="Search..."
      />
      <svg
        class="w-6 h-6 mt-1 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        ></path>
      </svg>
    </div>
  </form>
</template>

<script>
export default {
  data: () => ({
    text: "",
  }),
  methods: {
    onChange(e) {
      this.$emit("input", e.target.value);
    },
    submit() {
      const query = this.$route.query;
      this.$router.push({ query: { ...query, query: this.text } });
    },
  },
};
</script>

<style></style>
