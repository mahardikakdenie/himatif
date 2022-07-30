<template>
  <div>
    <label
      class="block text-sm font-medium text-gray-700"
      :for="name.toLowerCase()"
      >{{ name }}</label
    >
    <select
      :name="name.toLowerCase()"
      :id="name.toLowerCase()"
      :value="value"
      @input="onChange"
      class="focus:ring-0 active:ring-0 bg-white border border-gray-300 focus:border-0 block w-full sm:text-sm rounded-5px px-2 py-2"
    >
      <option v-if="isName" selected :value="0">Pilih {{ name }}</option>
      <option v-if="!isName" selected :value="0">
        Header Saat Ini Menggunakan Customer Story : {{ currentValue }}
      </option>
      <option v-for="(item, i) in options" :key="i" :value="item[itemValue]">
        {{ item[itemText] }}
      </option>
    </select>
    <p v-if="errorMsg" class="text-sm text-red-400">{{ errorMsg }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      default: () => [],
    },
    errorMsg: {
      type: String,
      default: () => "",
    },
    value: {
      type: [Number, Boolean, String],
      default: () => true,
    },
    itemText: {
      type: String,
      default: () => "name",
    },
    itemValue: {
      type: String,
      default: () => "id",
    },
    isName: {
      type: Boolean,
      default: () => true,
    },
    currentValue: {
      type: String,
      default: () => "",
    },
  },

  methods: {
    onChange(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>
