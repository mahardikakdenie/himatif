<template>
  <div class="p-20 text-17px text-black bg-red-900 text-center">
    <!-- explore solution -->

    <!-- images -->
    <div class="grid grid-cols-3 gap-60px">
      <div
        v-for="(item, index) in data"
        :key="index"
        class="relative w-full box-center flex items-center"
      >
        <h1
          v-if="item.isHover"
          class="absolute text-white text-xl z-10 font-bold"
        >
          {{ item.text }}
        </h1>
        <div
          class="hover:bg-black absolute inset-0 rounded-xl cursor-pointer duration-300 hover:opacity-40"
          @mouseenter="handleHover(index)"
          @mouseleave="handleLeave"
        />
        <img
          class="rounded-xl border border-smooth-gray-border"
          :src="`/gallery/${index + 1}.png`"
          width="100%"
          alt="dummy"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          text: `FOTO ANGKATAN
Dalam rangka berakhirnya masa jabatan 2018/2019,
foto dilaksanakan di Papyrus Photo`,
          isHover: false,
        },
        {
          text: `PENGABDIAN MASYARAKAT 2020
Merupakan agenda tahunan HIMATIF yang juga bekerjasama
dengan HIMAFIKA dengan pelaksanaan Pengabdian di
Pangalengan`,
          isHover: false,
        },
        {
          text: `PROKER KOLABORASI HIMATIF HIMAFE
HIMAFE mengajak HIMATIF untuk mengadakan
webinar `,
          isHover: false,
        },
        {
          text: `HIMATIF BERBAGI
Berbagi takjil di jalan dan berbagi sembako 
dengan cara menggalang donasi dari
kawan-kawan`,
          isHover: false,
        },
        {
          text: `HIMATIF BERBAGI
Berbagi takjil di jalan dan berbagi sembako 
dengan cara menggalang donasi dari
kawan-kawan`,
          isHover: false,
        },
        {
          text: `HIMATIF BERBAGI
Berbagi takjil di jalan dan berbagi sembako 
dengan cara menggalang donasi dari
kawan-kawan`,
          isHover: false,
        },
      ],
    };
  },

  methods: {
    handleHover(idx) {
      this.data = this.data.map((item, index) =>
        index === idx ? { ...item, isHover: true } : { ...item, isHover: false }
      );
    },
    handleLeave() {
      this.data = this.data.map((item, index) => ({ ...item, isHover: false }));
    },
  },
};
</script>
<style>
.box-center {
  display: flex;
  justify-content: center;
  align-content: center !important;
}
</style>
