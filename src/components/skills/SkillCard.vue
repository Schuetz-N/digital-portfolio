<script setup lang="ts">
import type {Skill} from '@/types/skill'

defineProps<{
  skill: Skill
}>()

const getIconPath = (iconName: string): string => {
  return `${import.meta.env.BASE_URL}icons/${iconName}.svg`
}
</script>

<template>
  <div class="skill-card">
    <div class="skill-header">
      <div class="skill-name-wrapper">
        <div class="skill-icon">
          <img
            v-if="skill.icon"
            :src="getIconPath(skill.icon)"
            :alt="skill.name"
            @error="(e) => (e.target as HTMLElement).style.display = 'none'"
          />
        </div>
        <h3 class="skill-name">{{ skill.name }}</h3>
      </div>
      <span class="skill-level">{{ skill.level }}%</span>
    </div>
    <div class="skill-bar">
      <div
        class="skill-progress"
        :class="skill.category"
        :style="{ width: `${skill.level}%` }"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.skill-card {
  background: rgba(45, 45, 45, 0.43);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(10px);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid var(--color-gray-700);
  transition: all var(--transition-base);
}

.skill-card:hover {
  border-color: var(--color-accent-blue);
  transform: translateY(-3px);
  box-shadow: 0 20px 40px rgba(59, 130, 246, 0.2);
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.skill-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-white);
  transform: translateY(9px);
}

.skill-name-wrapper {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.skill-icon img {
  width: 32px;
  height: 32px;
  display: block;
  object-fit: contain;
}

.skill-level {
  font-size: 0.9rem;
  color: var(--color-white);
  font-weight: 600;
}

.skill-bar {
  height: 8px;
  background: var(--color-gray-700);
  border-radius: 4px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(
    90deg,
    #83a5ef 0%,
    #2563eb 25%,
    #83a5ef 50%,
    #2563eb 75%,
    #83a5ef 100%
  );
  background-size: 200% 100%;
  border-radius: 4px;
  transition: width 1s ease-out 0.3s;
  animation: water-flow 2s linear infinite;
}

.skill-progress.tools {
  background: linear-gradient(
    90deg,
    #6ee7b7 0%,
    #059669 25%,
    #6ee7b7 50%,
    #059669 75%,
    #6ee7b7 100%
  );
  background-size: 200% 100%;
}

@keyframes water-flow {
  0% {
    background-position: 200% center;
  }
  100% {
    background-position: 0 center;
  }
}
</style>
