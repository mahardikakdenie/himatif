<template>
  <tbody class="divide-y divide-gray-200 bg-white">
    <tr v-show="data.length === 0" class="">
      <td
        :colspan="headers.length + 1"
        class="text-center p-2 text-md font-semibold text-black"
      >
        Data Tidak ada
      </td>
    </tr>
    <tr v-show="data.length > 0" v-for="(item, i) in data" :key="item.email">
      <td
        class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
      >
        {{ i + 1 }}
      </td>
      <td
        v-for="(index, key) in item"
        :key="index"
        class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
      >
        {{ item[key] }}
      </td>
      <td
        class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
      >
        <a href="#" class="text-indigo-600 hover:text-indigo-900"
          >Edit<span class="sr-only"></span
        ></a>
        <a href="#" class="text-red-600 hover:text-red-900 ml-2"
          >Delete<span class="sr-only"></span
        ></a>
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    headers: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style></style>
