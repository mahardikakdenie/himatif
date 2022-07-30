<template>
  <thead class="bg-gray-50">
    <tr>
      <th
        class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
      ></th>
      <th
        v-for="header in headers"
        :key="header"
        scope="col"
        class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
      >
        {{ strDisplayText(header, " ") }}
      </th>

      <th />
      <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
        <span class="sr-only">Edit</span>
      </th>
    </tr>
  </thead>
</template>

<script>
import strDisplayText from "@/helpers/service/str";
export default {
  props: {
    headers: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    strDisplayText,
  },
};
</script>

<style></style>
