<template>
  <div>
    <FieldTable :headers="headers" :data="data" />
  </div>
</template>

<script>
export default {
  layout: "dashboard",
  data: () => ({
    headers: ["NIM", "fullname", "Email", "Angakatan", "Role"],
    data: [
      {
        fullname: "17201011",
        title: "Mahardika Kessuma Denie",
        email: "lindsay.walton@example.com",
        angkatan: "2020",
        role: "Member",
      },
    ],
  }),
};
</script>

<style></style>
