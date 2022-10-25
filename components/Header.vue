<script setup lang="ts">
const showMenu = ref(false);
const menuIcon = ref("heroicons:bars-3-20-solid");

const toggleMenu = () => {
  showMenu.value = !showMenu.value;

  if (showMenu.value) {
    menuIcon.value = "heroicons:bars-3-bottom-right-20-solid";
  } else {
    menuIcon.value = "heroicons:bars-3-20-solid";
  }
};
</script>

<template>
  <header class="w-full bg-[#272828]">
    <div class="container flex items-center justify-start py-3 mx-auto">
      <NuxtLink
        to="/"
        class="flex items-center justify-start text-white cursor-pointer"
      >
        <Icon name="material-symbols:stadia-controller" size="2rem" />
        <div class="ml-2 text-lg md:text-2xl font-proxima-nova-bold">
          Game Database
        </div>
      </NuxtLink>

      <nav class="hidden ml-auto lg:block">
        <ul
          class="flex w-full text-sm text-white list-none md:text-lg lg:text-xl font-proxima-nova-semibold"
        >
          <li class="ml-5 first:ml-0">
            <NuxtLink to="/" class="hover:text-yellow-300"> Home </NuxtLink>
          </li>
          <li class="ml-5 first:ml-0">
            <NuxtLink to="/contact" class="hover:text-yellow-300">
              Contact
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="relative block ml-auto text-white lg:hidden">
        <Icon
          :name="menuIcon"
          size="2rem"
          color="#fff"
          class="cursor-pointer"
          @click="toggleMenu"
        />

        <transition name="slide">
          <div
            class="absolute rounded right-0 top-[100%] bg-white w-72"
            v-if="showMenu"
          >
            <nav class="w-full p-4 text-right">
              <ul
                class="w-full text-lg text-black list-none md:text-lg lg:text-xl font-proxima-nova-semibold"
              >
                <li class="mb-4 last:mb-0">
                  <NuxtLink to="/" class="hover:text-amber-600">
                    Home
                  </NuxtLink>
                </li>
                <li class="mb-4 last:mb-0">
                  <NuxtLink to="/contact" class="hover:text-amber-600">
                    Contact
                  </NuxtLink>
                </li>
              </ul>
            </nav>
          </div>
        </transition>
      </div>
    </div>
  </header>
</template>
