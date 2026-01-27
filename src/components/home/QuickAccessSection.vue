<script setup lang="ts">
import QuickAccessCard from '@/components/home/QuickAccessCard.vue'
import {FileUser, Mail, PocketKnife, BriefcaseBusiness} from 'lucide-vue-next'
import type {Component} from 'vue'

defineProps<{
  title: string
  cards: Array<{
    to: string
    label: string
    description: string
  }>
}>()

const icons = [FileUser, PocketKnife, BriefcaseBusiness, Mail]
const getIcon = (index: number): Component => {
  return (icons[index] || icons[0]) as Component
}
</script>

<template>
  <section class="quick-links">
    <div class="container">
      <h2 class="section-title">{{ title }}</h2>
      <div class="links-grid">
        <QuickAccessCard
          v-for="(card, index) in cards"
          :key="card.to"
          :to="card.to"
          :icon="getIcon(index)"
          :label="card.label"
          :description="card.description"
          :index="index"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.quick-links {
  padding: 1.2rem 2rem;
  background: rgba(45, 45, 45, 0.43);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 3rem 0;
  padding: 0;
  text-align: center;
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
    background-position: 0% center;
  }
  50% {
    background-position: 100% center;
  }
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .links-grid {
    grid-template-columns: 1fr;
  }
}
</style>
