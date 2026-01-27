<script setup lang="ts">
import type {Component} from 'vue'

defineProps<{
  to: string
  icon: Component
  label: string
  description: string
  index: number
}>()
</script>

<template>
  <RouterLink :to="to" class="link-card">
    <div class="link-icon" :class="`icon-${index}`">
      <component :is="icon" :size="60"/>
    </div>
    <h3>{{ label }}</h3>
    <p>{{ description }}</p>
  </RouterLink>
</template>

<style scoped>
.link-card {
  background: var(--color-gray-800);
  padding: 2rem;
  border-radius: 12px;
  text-decoration: none;
  color: var(--color-white);
  transition: all var(--transition-base);
  border: 1px solid var(--color-gray-700);
}

.link-card:hover {
  transform: translateY(-5px);
  border-color: var(--color-accent-blue);
  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.2);
}

.link-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  filter: drop-shadow(0 4px 12px rgba(59, 130, 246, 0.4));
  transition: all var(--transition-base);
}

.link-icon.icon-0 {
  color: var(--color-accent-blue);
  filter: drop-shadow(0 4px 12px rgba(59, 130, 246, 0.5));
}

.link-icon.icon-1 {
  color: var(--color-accent-red);
  filter: drop-shadow(0 4px 12px rgba(239, 68, 68, 0.5));
}

.link-icon.icon-2 {
  color: #d97706;
  filter: drop-shadow(0 4px 12px rgba(217, 119, 6, 0.5));
}

.link-icon.icon-3 {
  color: #fbbf24;
  filter: drop-shadow(0 4px 12px rgba(251, 191, 36, 0.5));
}

.link-card:hover .link-icon {
  filter: drop-shadow(0 6px 20px currentColor);
  transform: scale(1.1) translateY(-5px);
}

.link-card h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-white);
}

.link-card p {
  color: var(--color-gray-300);
  line-height: 1.6;
}
</style>
