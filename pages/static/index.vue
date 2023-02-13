<template>
  <div>
    <div class="flex flex-col gap-8 mb-16 lg:gap-16">
      <!-- Hero -->
      <div class="flex flex-col gap-8">
        <h1
          class="text-xl leading-loose sm:text-3xl md:text-4xl xl:text-6xl text-head_text"
        >
          I'm Juan, a junior Web Developer who loves creating new things 🔥
          <span class="text-link_text_hover">.</span>
        </h1>
        <p class="text-sm leading-relaxed md:text-2xl">
          I really enjoy learning and working with a modern Frontend stack like
          TypeScript, Vue.js and Nuxt.
        </p>
        <p class="text-sm leading-relaxed md:text-base">
          I'm currently looking for work. So if you are in the hunt for people
          passionate about Web technoligies: I'm your guy 🙋🏻, let's get in
          touch.
        </p>
      </div>

      <!-- Contact and social -->
      <div class="flex items-center justify-between">
        <div class="flex gap-1">
          <a href="https://github.com/" title="Github"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="p-2 transition-all rounded-md text-p_text hover:bg-border_sm iconify iconify--ant-design"
              style=""
              width="50"
              height="50"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="currentColor"
                d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5C64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9c26.4 39.1 77.9 32.5 104 26c5.7-23.5 17.9-44.5 34.7-60.8c-140.6-25.2-199.2-111-199.2-213c0-49.5 16.3-95 48.3-131.7c-20.4-60.5 1.9-112.3 4.9-120c58.1-5.2 118.5 41.6 123.2 45.3c33-8.9 70.7-13.6 112.9-13.6c42.4 0 80.2 4.9 113.5 13.9c11.3-8.6 67.3-48.8 121.3-43.9c2.9 7.7 24.7 58.3 5.5 118c32.4 36.8 48.9 82.7 48.9 132.3c0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9c177.1-59.7 304.6-227 304.6-424.1c0-247.2-200.4-447.3-447.5-447.3z"
              ></path></svg></a
          ><a href="https://twitter.com/" title="Twitter"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="p-2 transition-all rounded-md text-p_text hover:bg-border_sm iconify iconify--ant-design"
              style=""
              width="50"
              height="50"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="currentColor"
                d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94a336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6c0 13.2 1.6 26.4 4.2 39.1c-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9c-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850C671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2c33.2-24.3 62.3-54.4 85.5-88.2z"
              ></path></svg
          ></a>
        </div>
        <a
          class="bg-btn_back border-[1px] border-link_border px-2 py-2 rounded-md text-btn_text text-sm hover:bg-border_sm transition-colors md:px-4 w-fit"
          href="mailto:change@this.email"
          >Email Me</a
        >
      </div>

      <hr class="bg-topbar bg-repeat border-0 h-[1px]" />

      <!-- Attribution ❤️ -->
      <div class="py-6">
        Forked with ❤️ from
        <a
          class="underline"
          href="https://github.com/mightykillrr/portfolio-update"
          target="_blank"
          >Aniket Kotal</a
        >
      </div>
    </div>
  </div>
</template>
