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
    <a :href="blok.link.cached_url">{{ blok.text }}</a>
  </div>
</template>
