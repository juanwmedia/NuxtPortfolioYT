<script setup>
import { ref } from "vue";
const projects = ref(null);
const storyblokApi = useStoryblokApi();

const {
  data: { stories },
} = await storyblokApi.get("cdn/stories", {
  version: "draft",
  starts_with: "projects",
});
projects.value = stories.filter((story) => story.is_startpage !== true);
</script>

<template>
  <div
    v-editable="projects"
    class="flex flex-col items-center justify-center gap-28"
  >
    <component
      :is="project.content.component"
      v-for="project in projects"
      :key="project.uuid"
      :blok="project.content"
    />
  </div>
</template>
