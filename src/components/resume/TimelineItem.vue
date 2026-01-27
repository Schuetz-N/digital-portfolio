<script setup lang="ts">
import type {TimelineItem} from '@/types/timeline'

defineProps<{
  item: TimelineItem
}>()
</script>

<template>
  <div class="timeline-item">
    <div class="timeline-marker" :class="item.type"></div>

    <div class="timeline-content">
      <div class="timeline-header">
        <h3 class="timeline-title">{{ item.title }}</h3>
        <span class="timeline-period">{{ item.period }}</span>
      </div>
      <h4 class="timeline-organization">{{ item.organization }}</h4>
      <p class="timeline-description">{{ item.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  opacity: 0;
  transform: translateX(-30px);
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.2);
  transition: all ease-in-out;
}

.timeline-item.visible {
  opacity: 1;
  transform: translateX(0);
}

.timeline-marker {
  position: absolute;
  left: -2.5rem;
  top: 0;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--color-accent-blue);
  border: 3px solid var(--color-black);
  z-index: 1;
}

.timeline-marker.work {
  background: var(--color-accent-blue);
}

.timeline-marker.education {
  background: var(--color-accent-red);
}

.timeline-content {
  background: rgba(45, 45, 45, 0.43);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--color-gray-700);
  transition: all var(--transition-base);
}

.timeline-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  margin-bottom: 0.5rem;
}

.timeline-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-white);
  line-height: 1.2;
}

.timeline-period {
  font-size: 0.9rem;
  color: #8ba4d0;
  font-weight: 500;
}

.timeline-organization {
  font-size: 1.1rem;
  color: var(--color-gray-300);
  margin-bottom: 1rem;
}

.timeline-description {
  color: var(--color-gray-400);
  line-height: 1.8;
}

@media (max-width: 768px) {
  .timeline-marker {
    left: -2rem;
  }

  .timeline-header {
    flex-direction: column;
  }
}
</style>
