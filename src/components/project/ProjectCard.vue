<script setup lang="ts">
import type {Project} from '@/types/project'

defineProps<{
  project: Project
  gitLabel: string
  demoLabel?: string
}>()

const getYouTubeEmbedUrl = (videoId: string) => {
  return `https://www.youtube.com/embed/${videoId}`
}
</script>

<template>
  <div class="project-card">
    <div v-if="project.videoId" class="project-video">
      <iframe
        :src="getYouTubeEmbedUrl(project.videoId)"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div v-else class="project-placeholder">
      <span class="placeholder-icon">🎬</span>
      <p>Video Placeholder</p>
    </div>
    <div class="project-content">
      <h3 class="project-title">{{ project.title }}</h3>
      <p class="project-description">{{ project.description }}</p>

      <div class="project-tech">
        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="tech-tag"
        >
          {{ tech }}
        </span>
      </div>

      <div class="project-links">
        <a
          v-if="project.githubUrl"
          :href="project.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="project-link"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          {{ gitLabel }}
        </a>
        <a
          v-if="project.liveUrl"
          :href="project.liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="project-link primary"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
          {{ demoLabel || 'Live' }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  background: rgba(45, 45, 45, 0.43);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--color-gray-700);
  transition: all var(--transition-base);
  opacity: 0;
  transform: translateY(30px);
}

.project-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.project-card:hover {
  border-color: var(--color-accent-blue);
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(59, 130, 246, 0.2);
}

.project-card.visible:hover {
  transform: translateY(-8px);
}

.project-video {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  background: var(--color-gray-900);
}

.project-video iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

.project-placeholder {
  aspect-ratio: 16/9;
  background: var(--color-gray-900);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.placeholder-icon {
  font-size: 4rem;
  opacity: 0.5;
}

.project-placeholder p {
  color: var(--color-gray-500);
  font-size: 1.1rem;
}

.project-content {
  padding: 2rem;
}

.project-title {
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--color-white);
}

.project-description {
  color: var(--color-gray-300);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  padding: 0.4rem 1rem;
  background: var(--color-gray-700);
  color: var(--color-accent-blue);
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

.project-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: var(--color-gray-700);
  color: var(--color-white);
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: all var(--transition-fast);
}

.project-link:hover {
  background: var(--color-gray-600);
  transform: translateY(-2px);
}

.project-link.primary {
  background: var(--color-accent-blue);
}

.project-link.primary:hover {
  background: #2563eb;
}
</style>
