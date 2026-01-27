<script setup lang="ts">
import {ref} from 'vue'

import {projects, projectLabel} from '@/data/projects'
import ProjectCard from '@/components/project/ProjectCard.vue'

const isVisible = ref(true)
</script>

<template>
  <div class="projects-view">
    <div class="container">
      <h1 class="page-title" :class="{ visible: isVisible }">
        {{ projectLabel.title }}
      </h1>
      <p class="page-subtitle" :class="{ visible: isVisible }">
        {{ projectLabel.subtitle }}
      </p>

      <div class="projects-grid">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="project.id"
          :project="project"
          :git-label="projectLabel.buttonLabelGit"
          :demo-label="projectLabel.buttonLabelDemo"
          :class="{ visible: isVisible }"
          :style="{ transitionDelay: `${index * 100}ms` }"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects-view {
  padding: 4rem 2rem;
  min-height: calc(100vh - 80px);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
  opacity: 0;
  transform: translateY(20px);
  transition: all 1.5s ease-out;
  background: linear-gradient(
    90deg,
    var(--color-accent-blue),
    var(--color-white),
    var(--color-accent-blue)
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient-shift 6s ease infinite;
}

@keyframes gradient-shift {
  0%, 100% {
    background-position: 0 center;
  }
  50% {
    background-position: 100% center;
  }
}

.page-title.visible {
  opacity: 1;
  transform: translateY(0);
}

.page-subtitle {
  font-size: 1.2rem;
  color: var(--color-gray-200);
  text-align: center;
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out 0.1s;
  font-weight: 400;
  letter-spacing: 1px;
  animation: subtle-fade 4s ease-in-out infinite;
}

@keyframes subtle-fade {
  0%, 100% {
    opacity: 0.7;
  }
  50% {
    opacity: 1;
  }
}

.page-subtitle.visible {
  transform: translateY(0);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
