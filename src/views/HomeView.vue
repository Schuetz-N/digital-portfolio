<script setup lang="ts">
import {ref, computed} from 'vue'
import profilePhoto from '@/assets/images/profile.jpg'
import {homeLabel} from '@/data/home'
import QuickAccessSection from '@/components/home/QuickAccessSection.vue'

const isVisible = ref(true)

const quickAccessCards = computed(() => [
  {
    to: '/resume',
    label: homeLabel.routerLinkLabel[0] || '',
    description: homeLabel.routerLinkDescription[0] || ''
  },
  {
    to: '/skills',
    label: homeLabel.routerLinkLabel[1] || '',
    description: homeLabel.routerLinkDescription[1] || ''
  },
  {
    to: '/projects',
    label: homeLabel.routerLinkLabel[2] || '',
    description: homeLabel.routerLinkDescription[2] || ''
  },
  {
    to: '/contact',
    label: homeLabel.routerLinkLabel[3] || '',
    description: homeLabel.routerLinkDescription[3] || ''
  }
])
</script>

<template>
  <div class="home">
    <section class="hero" :class="{ visible: isVisible }">
      <div class="hero-content">
        <div class="profile-photo">
          <div class="photo-container">
            <img :src="profilePhoto" alt="Nils Schütz"/>
          </div>
        </div>

        <h1 class="hero-title">
          {{ homeLabel.heroTitle }} <span class="accent">{{ homeLabel.heroTitleName }}</span>
        </h1>
        <p class="hero-subtitle">
          {{ homeLabel.subtitle }}
        </p>
        <p class="hero-description">
          {{ homeLabel.description }}
        </p>
        <div class="hero-cta">
          <RouterLink to="/projects" class="btn btn-primary">
            {{ homeLabel.projectLinkLabel }}
          </RouterLink>
          <RouterLink to="/contact" class="btn btn-secondary">
            {{ homeLabel.contactLinkLabel }}
          </RouterLink>
        </div>
      </div>
    </section>
    <QuickAccessSection :title="homeLabel.sectionTitle" :cards="quickAccessCards"/>
  </div>
</template>

<style scoped>
.home {
  min-height: calc(100vh - 80px);
}

.hero {
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.hero.visible {
  opacity: 1;
  transform: translateY(0);
}

.hero-content {
  max-width: 800px;
  text-align: center;
}

.profile-photo {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  animation: fadeInScale 0.8s ease-out 0.3s both;
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.photo-container {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 4px solid var(--color-gray-700);
  overflow: hidden;
  transition: all var(--transition-base);
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.photo-container::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(59, 130, 246, 0.1),
    transparent
  );
  transform: rotate(45deg);
  animation: shimmer 3s infinite;
  z-index: 1;
  pointer-events: none;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%) translateY(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) translateY(100%) rotate(45deg);
  }
}

.photo-container:hover {
  border-color: var(--color-accent-blue);
  box-shadow: 0 0 40px rgba(59, 130, 246, 0.4);
  transform: scale(1.05);
}

.photo-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  object-position: center;
}

.hero-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.accent {
  background: linear-gradient(135deg, var(--color-accent-blue), var(--color-accent-red));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  color: var(--color-gray-300);
  margin-bottom: 1.5rem;
}

.hero-description {
  font-size: 1.1rem;
  color: var(--color-gray-400);
  line-height: 1.8;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all var(--transition-base);
  display: inline-block;
}

.btn-primary {
  background: var(--color-accent-blue);
  color: var(--color-white);
}

.btn-primary:hover {
  background: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
}

.btn-secondary {
  background: transparent;
  color: var(--color-white);
  border: 2px solid var(--color-gray-700);
}

.btn-secondary:hover {
  border-color: var(--color-accent-red);
  color: var(--color-accent-red);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .photo-container {
    width: 160px;
    height: 160px;
  }
}
</style>
