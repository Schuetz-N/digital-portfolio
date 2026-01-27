<script setup lang="ts">
import {ref, onMounted, onUnmounted} from 'vue'
import {useRoute} from 'vue-router'
import * as HeaderData from "@/data/header.ts";

const route = useRoute()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const isActive = (name: string) => route.name === name
</script>

<template>
  <header class="header" :class="{ scrolled: isScrolled }">
    <div class="container">
      <RouterLink to="/" class="logo" @click="closeMobileMenu">
        <span class="logo-text">{{ HeaderData.headerTitle.title }}</span>
      </RouterLink>

      <button class="mobile-toggle" @click="toggleMobileMenu" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav class="nav" :class="{ 'mobile-open': isMobileMenuOpen }">
        <RouterLink
          to="/"
          class="nav-link"
          :class="{ active: isActive('home') }"
          @click="closeMobileMenu"
        >
          {{ HeaderData.headerNavHome.navigationLabel }}
        </RouterLink>
        <RouterLink
          to="/resume"
          class="nav-link"
          :class="{ active: isActive('resume') }"
          @click="closeMobileMenu"
        >
          {{ HeaderData.headerNavResume.navigationLabel }}
        </RouterLink>
        <RouterLink
          to="/skills"
          class="nav-link"
          :class="{ active: isActive('skills') }"
          @click="closeMobileMenu"
        >
          {{ HeaderData.headerNavSkills.navigationLabel }}
        </RouterLink>
        <RouterLink
          to="/projects"
          class="nav-link"
          :class="{ active: isActive('projects') }"
          @click="closeMobileMenu"
        >
          {{ HeaderData.headerNavProjects.navigationLabel }}
        </RouterLink>
        <RouterLink
          to="/contact"
          class="nav-link accent"
          :class="{ active: isActive('contact') }"
          @click="closeMobileMenu"
        >
          {{ HeaderData.headerNavContact.navigationLabel }}
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(10px);
  transition: all var(--transition-base);
  border-bottom: 1px solid transparent;
}

.header.scrolled {
  background: rgba(10, 10, 10, 0.95);
  border-bottom-color: var(--color-gray-800);
  box-shadow: var(--shadow-lg);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--color-white), var(--color-accent-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all var(--transition-fast);
  letter-spacing: 0.5px;
  filter: drop-shadow(0 0 8px rgba(252, 244, 244, 0.4));
  animation: logo-glow 3s ease-in-out infinite;
}

@keyframes logo-glow {
  0%, 100% {
    filter: drop-shadow(0 0 6px rgba(59, 130, 246, 0.3));
  }
  50% {
    filter: drop-shadow(0 0 12px rgba(59, 130, 246, 0.6));
  }
}

.logo:hover {
  filter: drop-shadow(0 0 15px rgba(239, 68, 68, 0.7));
  background: linear-gradient(135deg, var(--color-accent-red), var(--color-accent-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.mobile-toggle span {
  width: 25px;
  height: 2px;
  background: var(--color-white);
  transition: all var(--transition-fast);
}

.nav {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: var(--color-gray-300);
  font-weight: 500;
  transition: color var(--transition-fast);
  position: relative;
  padding: 0.5rem 0;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-accent-blue);
  transition: width var(--transition-base);
}

.nav-link:hover,
.nav-link.active {
  color: var(--color-white);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

.nav-link.accent {
  color: var(--color-white);
  font-weight: 600;
}

@media (max-width: 768px) {
  .mobile-toggle {
    display: flex;
  }

  .nav {
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    background: var(--color-gray-900);
    flex-direction: column;
    padding: 2rem;
    gap: 1.5rem;
    transform: translateX(100%);
    transition: transform var(--transition-base);
    border-top: 1px solid var(--color-gray-800);
  }

  .nav.mobile-open {
    transform: translateX(0);
  }

  .nav-link {
    font-size: 1.25rem;
  }
}
</style>
