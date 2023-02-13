<template>
  <div class="flex flex-col w-full gap-8 lg:gap-12">
    <img
      src="~/assets/img/about.jpeg"
      class="object-cover w-full h-56 rounded-xl"
      alt="About Me"
    />
    <div class="flex flex-col w-full gap-6 mx-auto lg:gap-9 md:w-10/12">
      <p class="text-sm leading-relaxed md:text-base lg:leading-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi itaque,
        repellendus dolore sint enim doloremque doloribus adipisci impedit eum a
        consequatur. Autem, hic doloremque temporibus assumenda natus qui
        ratione minima. Voluptatum laudantium tempora enim ipsum sapiente
        inventore corrupti, blanditiis omnis iusto, neque nihil dignissimos.
        Magni suscipit, laboriosam vitae sed maxime corrupti reiciendis
        similique. Iure quis numquam dicta expedita, nemo nesciunt! Quis
        explicabo, est aliquid eos odit error obcaecati reprehenderit veniam
        autem nobis pariatur sed minus asperiores eveniet minima dolorum
        expedita atque. Odio maiores vel inventore atque voluptatum minus
        commodi optio!
      </p>

      <p class="text-sm leading-relaxed md:text-base lg:leading-8">
        Iure quis numquam dicta expedita, nemo nesciunt! Quis explicabo, est
        aliquid eos odit error obcaecati reprehenderit veniam autem nobis
        pariatur sed minus asperiores eveniet minima dolorum expedita atque.
        Odio maiores vel inventore atque voluptatum minus commodi optio!
      </p>
    </div>

    <hr class="bg-topbar bg-repeat border-0 h-[1px]" />

    <!-- Work and education -->
    <div class="flex flex-col gap-5">
      <h3
        class="text-base font-theme_bold md:text-xl lg:text-2xl text-head_text"
      >
        Work and education
      </h3>
      <div class="flex flex-col gap-2 lg:gap-2">
        <a
          class="flex flex-col items-start justify-between gap-1 sm:flex-row flex-nowrap sm:gap-6"
          href="#"
          ><span class="font-theme_bold text-head_text">ACME</span
          ><span class="flex-[1_1_auto]"></span
          ><span class="text-sm sm:text-right sm:text-base"
            >Jr. Frontend Developer</span
          ><span class="text-sm sm:text-base">2021 - 2022</span></a
        >
      </div>
      <div class="flex flex-col gap-2 lg:gap-2">
        <a
          class="flex flex-col items-start justify-between gap-1 sm:flex-row flex-nowrap sm:gap-6"
          href="#"
          ><span class="font-theme_bold text-head_text">ESAT</span
          ><span class="flex-[1_1_auto]"></span
          ><span class="text-sm sm:text-right sm:text-base"
            >Masters Degreee on Web Development</span
          ><span class="text-sm sm:text-base">2020 - 2021</span></a
        >
      </div>
    </div>
  </div>
</template>
