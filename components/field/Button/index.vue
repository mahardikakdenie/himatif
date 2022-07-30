<template>
  <button
    :class="
      `text-sm font-semibold text-white ${bgColor} py-13px ${roundedClass} ` +
      customClass
    "
    :type="type"
    @click="handleClick"
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  name: "ButtonField",
  props: {
    roundedClass: {
      type: String,
      default: () => "rounded-5px",
    },
    customClass: {
      type: String,
      default: () => "w-full",
    },
    bgColor: {
      type: String,
      default: () => "bg-purple-smooth",
    },
    title: {
      type: String,
      default: () => "Sign In",
    },
    type: {
      type: String,
      defult: () => "button",
    },
  },

  computed: {
    // isRequesting() {
    //   return this.$store.state.isRequesting;
    // },
  },

  methods: {
    handleClick(e) {
      this.$emit("handleClick", e);
    },
  },
};
</script>
