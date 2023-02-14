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
        :alt="blok.image.alt"
        :src="blok.image.filename"
        class="w-full rounded-lg"
      />
      <div class="flex flex-col gap-6 md:w-5/6 items-left">
        <span class="text-2xl font-theme_bold text-head_text">{{
          blok.name
        }}</span>
        <p class="text-sm lg:text-lg">{{ blok.description }}</p>
        <template v-if="blok.buttons.length">
          <component
            :is="button.component"
            v-for="button in blok.buttons"
            :key="button._uid"
            :blok="button"
            class="bg-btn_back border-[1px] border-link_border px-2 py-2 rounded-md font-theme_bold text-btn_text text-sm hover:bg-border_sm transition-colors md:px-4 slg:text-base slg:px-6 slg:py-3 w-fit"
          />
        </template>
      </div>
    </div>
  </div>
</template>
