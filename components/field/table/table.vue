<template>
  <div class="sm:px-6 lg:px-8">
    <FieldTableHeader />
    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div
            class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"
          >
            <table class="min-w-full divide-y divide-gray-300">
              <FieldTableTheader :headers="headers" />
              <FieldTableTbody :data="data" :headers="headers" />
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    headers: {},
    data: {},
  },
  data: () => ({
    //
  }),
};
</script>

<style></style>
