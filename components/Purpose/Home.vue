<template>
  <div class="bg-gray-200 p-12">
    <div class="grid grid-rows-1">
      <div class="grid grid-cols-2 p-6">
        <div v-for="(item, i) in headers" :key="i" class="py-6">
          <span
            class="text-center text-5xl font-bold py-6 border-indigo-900 border-b-4"
          >
            {{ item.name }}
          </span>
          <div class="my-12">
            {{ item.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    headers: [
      {
        name: "Visi",
        text: `Menjadikan HIMATIF sebagai himpunan mahahsiswa yang satu, kompak, 
berkualitas, dan aktif serta berperan dalam membantu mahasiswa 
Jurusan Teknik Informatika pada khususnya dan ARS University 
pada umumnya baik dalam bidang akademik maupun non-akedemik`,
      },
      {
        name: "Misi",
        text: `1.	Mengembangkan kemampuan akademis Mahasiswa 
Jurusan Teknik Informatika ARS University secara efektif.
2.	Menumbuhkan rasa memiliki, kekeluargaan, bergotong royong,
saling membantu dan saling memperhatikan di dalam HIMATIF.
3.	Menumbuhkan rasa kekeluargaan, saling membantu dan 
saling memperhatikan antara Mahasiswa Jurusan 
Teknik Informatika ARS University.
4.	Membangun sinergi dengan organisasi lain dalam 
ARS University.
`,
      },
    ],
  }),
};
</script>

<style></style>
