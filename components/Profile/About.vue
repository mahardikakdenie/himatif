<template>
  <div class="w-full p-12 lg:p-36 bg-red-800">
    <div class="grid grid-rows-1">
      <div class="grid grid-cols-1 lg:grid-cols-3">
        <div class="">
          <span class="text-5xl text-center font-bold text-white border-b-2"
            >Visi</span
          >
          <div
            class="mt-5 w-72 lg:w-full text-justify subpixel-antialiased text-lg text-white"
          >
            Menjadikan HIMATIF sebagai himpunan mahahsiswa yang satu, kompak,
            berkualitas, dan aktif serta berperan dalam membantu mahasiswa
            Jurusan Teknik Informatika pada khususnya dan ARS University pada
            umumnya baik dalam bidang akademik maupun non-akedemik
          </div>
        </div>
        <div class="flex justify-center p-32 items-center item-img">
          <div
            class="border-2 position-relative p-28 rounded-full items-center bg-contain bg-no-repeat"
            style="background-image: url(himatif.png)"
          ></div>
        </div>
        <div>
          <span class="text-5xl text-center font-bold text-white border-b-2"
            >Misi</span
          >
          <div
            class="mt-5 w-72 lg:w-full text-justify subpixel-antialiased text-lg text-white"
          >
            <ol class="list-decimal">
              <li v-for="option in visi" :key="option">
                {{ option }}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="flex justify-center p-32 items-center item-img-lg">
      <div
        class="border-2 position-relative p-28 rounded-full items-center bg-contain bg-no-repeat"
        style="background-image: url(himatif.png)"
      ></div>
    </div>
    <!--  -->
    <div class="grid grid-row-1">
      <div class="grid grid-cols-1 lg:grid-cols-3">
        <div>
          <span class="text-5xl text-center font-bold text-white border-b-2"
            >Sejarah</span
          >
          <div
            class="mt-5 w-72 lg:w-full text-justify subpixel-antialiased text-lg text-white"
          >
            HIMATIF berdiri pada hari Jum’at, 21 Maret 2014 sampai waktu yang
            tidak ditentukan
          </div>
        </div>
        <div></div>
        <div>
          <span class="text-5xl text-center font-bold text-white border-b-2"
            >Makna Lambang</span
          >
          <div
            class="mt-5 w-72 lg:w-full text-justify subpixel-antialiased text-lg text-white"
          >
            <ol class="list-decimal list-outside">
              <li v-for="(item, i) in symbol_meaning" :key="i">
                {{ item.text }}
                <ul class="list-disc mr-2" v-if="item.sub !== '' && item.child">
                  <li>
                    {{ item.sub }}
                  </li>
                  <li v-for="(mean, z) in item.child" :key="z">
                    {{ mean.text }}
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="container my-12">
      <div class="justify-center flex my-6">
        <span class="text-5xl text-center text-white font-bold">
          Struktur organisasi
        </span>
      </div>
      <div class="flex justify-center">
        <img src="/struktur.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    visi: [
      `Mengembangkan kemampuan akademis Mahasiswa 
    Jurusan Teknik Informatika ARS University secara 
    efektif`,
      `Menumbuhkan rasa memiliki, kekeluargaan, bergotong 
    royong, saling membantu dan saling memperhatikan di dalam 
    HIMATIF`,
      `Menumbuhkan rasa kekeluargaan, saling membantu dan 
    saling memperhatikan antara Mahasiswa Jurusan 
    Teknik Informatika ARS University`,
      `Membangun sinergi dengan organisasi lain dalam 
    ARS University`,
    ],
    symbol_meaning: [
      {
        text: `HIMATIF adalah Nama atau Identitas Diri dari
        Himpunan yang telah disepakati dalam 
        Musyawarah Mahasiswa (MUSMA) Konsolidasi I`,
        sub: "",
        child: [],
      },
      {
        text: `	Gerigi yang berjumlah 8 (Delapan) adalah 
      mengartikan kekonsistenan dalam keadaan 
      bagaimanapun, dan membentuk melingkar 
      mengartikan persatuan tanpa batas.`,
        sub: "",
        child: [],
      },
      {
        text: `3 (Tiga) Api melambangkan keberanian dan
        semangat yang berkobar`,
        sub: "Jumlah 3 Melambangkan",
        child: [
          {
            text: `3 Kehidupan yaitu kehidupan alam dunia, 
            alam kubur, dan alam akhirat.`,
          },
          {
            text: "3 Hukum Yaitu Halam,Haram,dan Makruh",
          },
          {
            text: `3 Jiwa yaitu jiwa yang tenang, jiwa yang 
            mendorong kejahatan, dan jiwa yang mencela.
            `,
          },
          {
            text: `	Lingkaran berwarna hitam melambangkan suatu 
            misteri yang tetanam didalam HIMATIF.
`,
          },
        ],
      },
    ],
  }),
};
</script>

<style>
@media screen and (max-width: 640px) {
  .item-img {
    display: none !important;
  }
}
@media screen and (min-width: 640px) {
  .item-img-lg {
    display: none !important;
  }
}
</style>
