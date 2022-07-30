<template>
  <form action="" class="px-6 py-3 grid">
    <h3 class="text-lg leading-6 font-medium text-gray-900 mb-5">
      {{ $route.path.includes("add") ? "Add User " : " Edit User" }}
    </h3>
    <div class="gap-4 grid">
      <FieldInput />
      <FieldInput name="Password" type="Password" />
      <FieldInput name="Nim" type="number" />
      <FieldInput type="date" name="Date Of Birth" />
      <FieldInputSelect
        v-model="angkatanId"
        name="Angkatan"
        :options="angkatan"
        itemValue="value"
        itemText="name"
      />
      <FieldInputSelect
        v-model="roleId"
        name="Role"
        :options="role"
        itemValue="value"
        itemText="name"
      />
      <FieldButtonForm class="my-2" />
    </div>
  </form>
</template>

<script>
export default {
  data: () => ({
    angkatanId: 0,
    roleId: 0,
    angkatan: [
      {
        name: "2010",
        value: "2010",
      },
    ],
    role: [
      {
        name: "Pengurus",
        value: "Pengurus",
      },
      {
        name: "Demisioner",
        value: "Demisioner",
      },
      {
        name: "Anggota",
        value: "Anggota",
      },
    ],
  }),
};
</script>

<style></style>
