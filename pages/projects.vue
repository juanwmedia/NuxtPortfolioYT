<script setup>
const story = await useAsyncStoryblok("projects", {
  version: "draft",
});
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
