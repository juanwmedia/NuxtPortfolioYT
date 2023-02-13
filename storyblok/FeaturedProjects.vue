<template>
  <!-- Featured projects -->
  <div class="flex flex-col gap-2 lg:gap-2">
    <h3 class="text-base md:text-2xl lg:text-4xl text-head_text">
      Featured Projects
    </h3>
    <p>Here are some of the projects that I'm proud of.</p>
    <div
      class="grid grid-cols-1 pt-8 mx-auto lg:grid-cols-2 gap-7 sm:gap-6 sm:w-5/6 lg:w-full"
    >
      <a
        href="#"
        class="flex flex-col w-full p-6 py-6 lg:p-6 lg:py-10 items-center gap-8 rounded-md bg-item_back hover:bg-item_hover_back transition-colors border-[1px] border-border_sm"
        ><img
          alt="Project 1"
          src="~/assets/img/project-1.jpeg"
          class="object-cover w-full rounded-md lg:h-48"
        />
        <div class="flex flex-col justify-between gap-4 lg:gap-5">
          <span class="text-lg text-head_text lg:text-xl">Project 1</span>
          <p class="text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam at
            vitae eligendi tempora nemo id repellendus, minus consectetur libero
            a iure in? Maxime qui veritatis ullam velit nesciunt reprehenderit
            voluptatum?
          </p>
        </div></a
      ><a
        href="#"
        class="flex flex-col w-full p-6 py-6 lg:p-6 lg:py-10 items-center gap-8 rounded-md bg-item_back hover:bg-item_hover_back transition-colors border-[1px] border-border_sm"
        ><img
          alt="Project 2"
          src="~/assets/img/project-2.jpeg"
          class="object-cover w-full rounded-md lg:h-48"
        />
        <div class="flex flex-col justify-between gap-4 lg:gap-5">
          <span class="text-lg text-head_text lg:text-xl">Project 2</span>
          <p class="text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
            voluptatem atque aliquid aperiam animi labore odit earum fuga alias!
            Mollitia nobis maiores nesciunt totam sapiente illo ex veniam
            temporibus expedita!
          </p>
        </div></a
      >
    </div>
  </div>
</template>
