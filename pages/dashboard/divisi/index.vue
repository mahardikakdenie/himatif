<template>
  <div>
    <FieldTable :headers="headers" :data="data" />
  </div>
</template>

<script>
export default {
  layout: "dashboard",
  data: () => ({
    headers: ["Nama divisi", "Ketua Divisi", "jumlah anggota divisi"],
    data: [
      {
        name: "Minat Bakat",
        title: "Rizki Aziz",
        anggota: "20",
      },
    ],
  }),
};
</script>

<style></style>
