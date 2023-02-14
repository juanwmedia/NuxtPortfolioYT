<script setup>
defineProps({
  blok: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});
</script>

<template>
  <div v-editable="blok">
    <div class="flex flex-col items-center gap-8">
      <img
        alt="Project 1"
        src="~/assets/img/project-1.jpeg"
        class="w-full rounded-lg"
      />
      <div class="flex flex-col gap-6 md:w-5/6 items-left">
        <span class="text-2xl font-theme_bold text-head_text">Project 1</span>
        <p class="text-sm lg:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam at
          vitae eligendi tempora nemo id repellendus, minus consectetur libero a
          iure in? Maxime qui veritatis ullam velit nesciunt reprehenderit
          voluptatum?
        </p>
        <a
          class="bg-btn_back border-[1px] border-link_border px-2 py-2 rounded-md font-theme_bold text-btn_text text-sm hover:bg-border_sm transition-colors md:px-4 slg:text-base slg:px-6 slg:py-3 w-fit"
          href="#"
          >Check Project
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="inline text-xl iconify iconify--ep"
            width="1em"
            height="1em"
            viewBox="0 0 1024 1024"
            style="color: rgb(234, 234, 234)"
          >
            <path
              fill="currentColor"
              d="M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0V256z"
            ></path>
            <path
              fill="currentColor"
              d="M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312l544-544z"
            ></path></svg
        ></a>
      </div>
    </div>
  </div>
</template>
