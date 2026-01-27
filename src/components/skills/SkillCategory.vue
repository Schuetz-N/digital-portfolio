<script setup lang="ts">
import type {Skill} from '@/types/skill'
import SkillCard from './SkillCard.vue'

defineProps<{
  title: string
  skills: Skill[]
  delay?: string
}>()
</script>

<template>
  <div class="category-block" :style="{ transitionDelay: delay }">
    <h2 class="category-title">{{ title }}</h2>
    <div class="skills-grid">
      <SkillCard v-for="skill in skills" :key="skill.id" :skill="skill"/>
    </div>
  </div>
</template>

<style scoped>
.category-block {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out;
}

.category-block.visible {
  opacity: 1;
  transform: translateY(0);
}

.category-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--color-gray-400);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
