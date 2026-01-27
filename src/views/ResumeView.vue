<script setup lang="ts">
import {ref} from 'vue'
import {timelineItems, resumeLabel} from '@/data/timeline'
import TimelineItem from '@/components/resume/TimelineItem.vue'

const isVisible = ref(true)
</script>

<template>
  <div class="resume-view">
    <div class="container">
      <h1 class="page-title" :class="{ visible: isVisible }">{{ resumeLabel.title }}</h1>
      <p class="page-subtitle" :class="{ visible: isVisible }">
        {{ resumeLabel.subtitle }}
      </p>
      <div class="legend" :class="{ visible: isVisible }">
        <div class="legend-item">
          <span class="legend-dot work"></span>
          <span>Work Experience</span>
        </div>
        <div class="legend-item">
          <span class="legend-dot education"></span>
          <span>Education</span>
        </div>
      </div>

      <div class="timeline">
        <TimelineItem
          v-for="(item, index) in timelineItems"
          :key="item.id"
          :item="item"
          :class="{ visible: isVisible }"
          :style="{ transitionDelay: `${index * 100}ms` }"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.resume-view {
  padding: 4rem 2rem;
  min-height: calc(100vh - 80px);
}

.container {
  max-width: 900px;
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

.legend {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;

  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out 0.2s;
}

.legend.visible {
  opacity: 1;
  transform: translateY(0);
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--color-gray-300);
  font-size: 1rem;
  font-weight: 500;
}

.legend-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid var(--color-black);
  position: relative;
}

.legend-dot.work {
  background: var(--color-accent-blue);
  box-shadow: 0 0 8px rgba(59, 130, 246, 0.4);
}

.legend-dot.education {
  background: var(--color-accent-red);
  box-shadow: 0 0 8px rgba(239, 68, 68, 0.4);
}

.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(
    180deg,
    var(--color-accent-blue) 0%,
    var(--color-accent-red) 25%,
    var(--color-accent-blue) 50%,
    var(--color-gray-300) 75%,
    var(--color-accent-blue) 100%
  );
  background-size: 100% 200%;
  animation: timeline-flow 5s linear infinite;
}

@keyframes timeline-flow {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 200%;
  }
}

@media (max-width: 768px) {
  .timeline {
    padding-left: 1.5rem;
  }
}
</style>
