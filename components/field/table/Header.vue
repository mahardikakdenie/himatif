<template>
  <div class="sm:flex sm:items-center">
    <div class="sm:flex-auto">
      <!-- <h1 class="text-xl font-semibold text-gray-900">Users</h1> -->
      <FieldInputSearch />
    </div>
    <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
      <button
        @click="goto"
        type="button"
        class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
      >
        Add user
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "FieldInputComp",
  data() {
    return {
      text: "",
    };
  },
  methods: {
    onChange(e) {
      this.$emit("input", e.target.value);
    },
    submit() {
      const query = this.$route.query;
      this.$router.push({ query: { ...query, query: this.text } });
    },
    goto() {
      console.log("goto : ", this.$route);
      this.$router.push(`${this.$route.path}/add`);
    },
  },
};
</script>

<style></style>
