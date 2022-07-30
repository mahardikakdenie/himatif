<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-gray-100">
    <body class="h-full">
    ```
  -->
  <div class="">
    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex flex-col flex-grow p-5 bg-gray-700 overflow-y-auto">
        <div
          class="flex items-center flex-shrink-0 px-4 cursor-pointer"
          @click="$router.push('/')"
        >
          <img class="h-12 w-auto" src="/himatif.png" alt="himatif" />
          <div class="text-xl text-white font-bold text-center mx-4 truncate">
            Himatif
          </div>
        </div>
        <div></div>
        <div class="mt-5 flex-1 flex flex-col">
          <nav class="flex-1 px-2 pb-4 space-y-4">
            <a
              v-for="item in navigation"
              :key="item.name"
              @click="selectMenu(item.name)"
              :class="[
                item.current
                  ? 'bg-gray-600 text-white'
                  : 'text-gray-100 hover:bg-gray-600',
                'group flex items-center px-2 py-2 text-sm font-medium rounded-md cursor-pointer',
              ]"
            >
              <svg
                aria-hidden="true"
                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
                ></path>
                <path
                  d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                ></path>
              </svg>

              {{ item.name }}
            </a>
          </nav>
        </div>
      </div>
    </div>
    <div class="md:pl-64 flex flex-col flex-1">
      <div class="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
        <button
          type="button"
          class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
          @click="sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
          <!-- <MenuAlt2Icon class="h-6 w-6" aria-hidden="true" /> -->
        </button>
        <div class="flex-1 px-4 flex justify-between">
          <div class="sm:px-6 pt-4">
            <h1 class="text-2xl font-semibold text-gray-700">
              {{ strDisplayText($route.name, "-") }}
            </h1>
          </div>
          <div class="ml-4 flex items-center md:ml-6">
            <button
              type="button"
              class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span class="sr-only">View notifications</span>
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                ></path>
              </svg>
            </button>

            <!-- Profile dropdown -->
            <Menu as="div" class="mr-4 relative">
              <div>
                <div
                  class="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
              </div>

              <div></div>
              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
              </transition>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import strDisplayText from "@/helpers/service/str";
export default {
  data: () => ({
    sidebarOpen: false,
    navigation: [
      { name: "User", current: true },
      { name: "Divisi", current: false },
      { name: "Projects", current: false },
      { name: "Gallery", current: false },
      { name: "Contact", current: false },
      { name: "Keluar" },
      //   { name: "Reports", current: false },
    ],
    userNavigation: [
      { name: "Your Profile", href: "#" },
      { name: "Settings", href: "#" },
      { name: "Sign out", href: "#" },
    ],
  }),
  methods: {
    strDisplayText,
    selectMenu(menu) {
      this.navigation = this.navigation.map((x) =>
        x.name === menu ? { ...x, current: true } : { ...x, current: false }
      );
      const text = menu.split(" ").join("-").toLowerCase();

      this.$router.push(`/dashboard/${text}`);
    },
  },
};
</script>

<style></style>
