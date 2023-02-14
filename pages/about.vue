<script setup>
const story = await useAsyncStoryblok("about", {
  version: "draft",
});
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
