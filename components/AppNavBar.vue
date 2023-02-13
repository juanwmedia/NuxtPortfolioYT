<template>
  <Teleport to="body">
    <!-- NavBar -->
    <nav
      class="px-3 py-3 flex justify-between items-center border-b-[1px] border-border_sm fixed w-full bg-navbar_back backdrop-blur-sm sm:top-0 sm:bottom-auto sm:px-6 lg:py-4"
    >
      <div class="h-[1px] top-0 absolute left-0 w-full bg-topbar lg:h-1"></div>
      <a
        aria-current="page"
        href="/"
        class="text-3xl font-normal select-none router-link-active router-link-exact-active lg:text-4xl"
      >
        My Portfolio
      </a>
      <div class="flex items-center gap-1 text-sm sm:gap-2">
        <NuxtLink to="/">
          <span
            class="px-3 py-1 pb-2 transition-all rounded-md hover:bg-action_back sm:px-6 sm:py-2 lg:text-sm"
          >
            Home
          </span>
        </NuxtLink>
        <NuxtLink to="/projects">
          <span
            class="px-3 py-1 pb-2 transition-all rounded-md hover:bg-action_back sm:px-6 sm:py-2 lg:text-sm"
          >
            Projects
          </span>
        </NuxtLink>
        <NuxtLink to="/about">
          <span
            class="px-3 py-1 pb-2 transition-all rounded-md hover:bg-action_back sm:px-6 sm:py-2 lg:text-sm"
          >
            About
          </span>
        </NuxtLink>
      </div>
    </nav>
  </Teleport>
</template>
