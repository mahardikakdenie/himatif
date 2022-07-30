<template>
  <div class="flex justify-end gap-3">
    <FieldButton
      custom-class="px-8"
      bgColor="bg-red-700"
      type="button"
      title="Cancel"
      @handleClick="back"
    />
    <FieldButton
      custom-class="px-8"
      bgColor="bg-indigo-600"
      title="Submit"
      type="submit"
    />
  </div>
</template>

<script>
export default {
  name: "FormButton",
  methods: {
    back(e) {
      e.preventDefault();
      this.$router.go(-1);
    },
    submit() {
      this.$emit("submit");
    },
  },
};
</script>

</script>

<style></style>
