<template>
  <div>
    <label for="email" class="block text-sm font-medium text-gray-700">{{
      name
    }}</label>
    <div class="mt-1 relative border rounded-md shadow-sm">
      <input
        :type="type.toLowerCase()"
        :name="name.toLowerCase()"
        :id="name.toLowerCase()"
        :class="`${
          errorMsg
            ? 'rounded-5px px-2 py-2 block w-full border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm '
            : 'focus:ring-0 active:ring-0 border border-gray-300 focus:border-0 block w-full sm:text-sm rounded-5px px-2 py-2'
        }`"
        :placeholder="name"
        aria-invalid="true"
        aria-describedby="email-error"
      />
      <div
        class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
      ></div>
    </div>
    <p v-if="errorMsg" class="mt-2 text-sm text-red-600" id="email-error">
      {{ errorMsg }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: () => "Email",
    },
    type: {
      type: String,
      default: () => "text",
    },
    errorMsg: {
      type: String,
      default: () => "",
    },
  },
  data: () => ({
    error: false,
  }),
};
</script>

<style></style>
