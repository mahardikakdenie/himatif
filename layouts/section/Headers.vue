<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <div class="position-fixed">
    <nav class="bg-red-900 rounded border-gray-200 dark:bg-gray-900">
      <div
        class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5"
      >
        <a href="https://flowbite.com" class="flex items-center">
          <img
            src="../../assets/img/himatif.png"
            class="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span
            class="self-center text-white text-2xl font-semibold whitespace-nowrap dark:text-white"
            >Himatif</span
          >
        </a>
        <div class="flex items-center">
          <button
            type="button"
            class="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-xl px-5 py-3.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 mb-2"
          >
            Login
            <svg
              aria-hidden="true"
              class="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
    <nav class="bg-red-900 dark:bg-gray-700">
      <div class="py-4 px-4 mx-auto max-w-screen-xl md:px-6">
        <div class="flex items-center">
          <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
            <li v-for="(item, i) in navigation" :key="i">
              <a
                @click="$router.push(item.to)"
                class="text-white text-lg dark:text-white text-headers"
                aria-current="page"
                >{{ item.name }}</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
// import { SearchIcon } from "@heroicons/vue/solid";
// import { BellIcon, MenuIcon, XIcon } from "@heroicons/vue/outline";
// import himatif from "";

export default {
  components: {},
  data: () => ({
    user: {
      name: "Tom Cook",
      email: "tom@example.com",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    userNavigation: [
      { name: "Your Profile", href: "#" },
      { name: "Settings", href: "#" },
      { name: "Sign out", href: "#" },
    ],
    navigation: [
      { name: "Home", to: "/", current: true },
      { name: "Profile", to: "/profile", current: false },
      { name: "Gallery", to: "/", current: false },
      { name: "Contact Us", to: "/", current: false },
    ],
  }),
};
</script>
<style>
.text-headers:hover {
  border-bottom: 2px solid white !important;
  cursor: pointer;
}
.header {
  position: fixed !important;
}
</style>
