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
  <div v-editable="blok" class="mb-10">
    <h1
      class="text-xl sm:text-3xl md:text-4xl md:leading-normal lg:text-6xl lg:leading-relaxed font-theme_bold text-head_text"
    >
      {{ blok.title }}<span class="text-link_text_hover">.</span>
    </h1>
    <p
      class="-mt-2 text-sm leading-relaxed md:text-base lg:text-lg sg:leading-8"
    >
      {{ blok.subtitle }}
    </p>
  </div>
</template>
