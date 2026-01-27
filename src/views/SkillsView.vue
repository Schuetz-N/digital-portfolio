<script setup lang="ts">
import {ref, computed} from 'vue'
import {skills, skillLabel} from '@/data/skills'
import SkillCategory from '@/components/skills/SkillCategory.vue'

const isVisible = ref(true)

const categorizedSkills = computed(() => {
  return {
    frontend: skills.filter(s => s.category === 'frontend'),
    backend: skills.filter(s => s.category === 'backend'),
    tools: skills.filter(s => s.category === 'tools'),
    other: skills.filter(s => s.category === 'other')
  }
})
</script>

<template>
  <div class="skills-view">
    <div class="container">
      <h1 class="page-title" :class="{ visible: isVisible }">
        {{ skillLabel.title }}
      </h1>
      <p class="page-subtitle" :class="{ visible: isVisible }">
        {{ skillLabel.subtitle }}
      </p>

      <div class="skills-section">
        <SkillCategory
          v-if="categorizedSkills.frontend.length"
          :title="skillLabel.categoryTitle.frontend"
          :skills="categorizedSkills.frontend"
          :class="{ visible: isVisible }"
          delay="100ms"
        />

        <SkillCategory
          v-if="categorizedSkills.backend.length"
          :title="skillLabel.categoryTitle.backend"
          :skills="categorizedSkills.backend"
          :class="{ visible: isVisible }"
          delay="200ms"
        />

        <SkillCategory
          v-if="categorizedSkills.tools.length"
          :title="skillLabel.categoryTitle.tools"
          :skills="categorizedSkills.tools"
          :class="{ visible: isVisible }"
          delay="300ms"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.skills-view {
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

.skills-section {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
</style>
