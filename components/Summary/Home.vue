<template>
  <div class="p-12 bg-gray-100">
    <h2
      class="text-red-900 font-bold text-center text-5xl font-medium uppercase tracking-wide my-3"
    >
      Jumlah Anggota
    </h2>
    <ul
      role="list"
      :class="`grid grid-cols-1 mt-6 gap-6 sm:grid-cols-2 lg:grid-cols-4 `"
    >
      <li
        v-for="(person, i) in people"
        :key="i"
        :class="`${
          i === 8 ? 'col-span-4' : 'col-span-1'
        }  bg-white rounded-lg shadow-lg shadow-cyan-500/50 p-4 border-solid border-slate-100 border-4 divide-y divide-gray-200 box-hover`"
      >
        <div class="w-full flex items-center justify-between p-6 space-x-6">
          <div class="flex-1 truncate">
            <div class="flex items-center justify-center space-x-3">
              <h3 class="text-gray-900 text-lg font-medium truncate">
                {{ person.name }}
              </h3>
              <!-- <span
                class="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full"
                >{{ person.role }}</span
              > -->
            </div>
            <p class="mt-1 text-gray-500 text-center text-md truncate">
              {{ person.mount }} Member
            </p>
          </div>
          <!-- <img
            class="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
            :src="person.imageUrl"
            alt=""
          /> -->
        </div>
        <div>
          <div class="-mt-px flex divide-x divide-gray-200">
            <div class="w-0 flex-1 flex">
              <a
                :href="`mailto:${person.email}`"
                class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
              >
                <span class="ml-3">Lihat Detail</span>
              </a>
            </div>
            <div class="-ml-px w-0 flex-1 flex">
              <a
                :href="`tel:${person.telephone}`"
                class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
              >
                <span class="ml-3">Gallery</span>
              </a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    people: [
      {
        name: "Angkatan 2014",
        mount: 20,
        role: "Admin",
        email: "janecooper@example.com",
        telephone: "+1-202-555-0170",
        imageUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      },
      {
        name: "Angkatan 2015",
        mount: 20,
        role: "Admin",
        email: "janecooper@example.com",
        telephone: "+1-202-555-0170",
        imageUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      },
      {
        name: "Angkatan 2016",
        mount: 20,
        role: "Admin",
        email: "janecooper@example.com",
        telephone: "+1-202-555-0170",
        imageUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      },
      {
        name: "Angkatan 2017",
        mount: 20,
        role: "Admin",
        email: "janecooper@example.com",
        telephone: "+1-202-555-0170",
        imageUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      },
      {
        name: "Angkatan 2018",
        mount: 20,
        role: "Admin",
        email: "janecooper@example.com",
        telephone: "+1-202-555-0170",
        imageUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      },
      {
        name: "Angkatan 2019",
        mount: 20,
        role: "Admin",
        email: "janecooper@example.com",
        telephone: "+1-202-555-0170",
        imageUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      },
      {
        name: "Angkatan 2020",
        mount: 20,
        role: "Admin",
        email: "janecooper@example.com",
        telephone: "+1-202-555-0170",
        imageUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      },
      {
        name: "Angkatan 2021",
        mount: 20,
        role: "Admin",
        email: "janecooper@example.com",
        telephone: "+1-202-555-0170",
        imageUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      },
      {
        isLayout: true,
        name: "Total Angkatan",
        mount: 20,
        role: "Admin",
        email: "janecooper@example.com",
        telephone: "+1-202-555-0170",
        imageUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
      },
      // More people...
    ],
    projects: [
      {
        name: "Angkatan 2014",
        initials: "14",
        href: "#",
        members: 16,
        bgColor: "bg-red-900",
      },
      {
        name: "Component Design",
        initials: "15",
        href: "#",
        members: 12,
        bgColor: "bg-red-900",
      },
      {
        name: "Templates",
        initials: "16",
        href: "#",
        members: 16,
        bgColor: "bg-red-900",
      },
      {
        name: "React Components",
        initials: "17",
        href: "#",
        members: 8,
        bgColor: "bg-red-900",
      },
      {
        name: "Graph API",
        initials: "18",
        href: "#",
        members: 16,
        bgColor: "bg-red-900",
      },
      {
        name: "Component Design",
        initials: "19",
        href: "#",
        members: 12,
        bgColor: "bg-red-900",
      },
      {
        name: "Templates",
        initials: "20",
        href: "#",
        members: 16,
        bgColor: "bg-red-900",
      },
      {
        name: "React Components",
        initials: "ALL",
        href: "#",
        members: 8,
        bgColor: "bg-red-900",
      },
    ],
  }),
};
</script>

<style>
.box-hover:hover {
  transform: translateY(-10px) !important;
}
</style>
