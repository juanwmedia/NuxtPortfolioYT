<script setup>
const story = await useAsyncStoryblok("home", {
  version: "draft",
  resolve_relations: ["featured-projects.projects"],
});
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
