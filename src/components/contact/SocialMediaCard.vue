<script setup lang="ts">
import type {SocialLink} from '@/types/contact'
import SocialIcon from '@/components/contact/SocialIcon.vue'
import {socialMediaCardLabel} from "@/data/contact.ts";

defineProps<{
  socialLinks: SocialLink[]
  email: string
}>()
</script>

<template>
  <div class="social-card">
    <h2 class="card-title">{{ socialMediaCardLabel.title }}</h2>
    <p class="card-description">
      {{ socialMediaCardLabel.description }}
    </p>

    <div class="social-links">
      <a
        v-for="link in socialLinks"
        :key="link.name"
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        class="social-link"
        :class="link.icon"
      >
        <SocialIcon :icon="link.icon"/>
        <span class="social-name">{{ link.name }}</span>
      </a>
    </div>

    <a :href="`mailto:${email}`" class="cta-button">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2">
        <path
          d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
      {{ socialMediaCardLabel.buttonLabel }}
    </a>
  </div>
</template>

<style scoped>
.social-card {
  background: rgba(45, 45, 45, 0.43);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(10px);
  padding: 2.5rem;
  border-radius: 16px;
  border: 1px solid var(--color-gray-700);
}

.card-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: var(--color-white);
}

.card-description {
  color: var(--color-gray-300);
  margin-bottom: 2rem;
  line-height: 1.7;
}

.social-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.social-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem 1rem;
  background: var(--color-gray-700);
  border-radius: 12px;
  text-decoration: none;
  color: var(--color-white);
  transition: all var(--transition-base);
  border: 2px solid #737373;
}

.social-link.linkedin {
  transition: all var(--transition-base);
  border: 2px solid #8ba4d0;
}

.social-link.youtube {
  transition: all var(--transition-base);
  border: 2px solid #c97070;
}

.social-link:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 20px;
}

.social-link.github:hover {
  color: #b9b9b9;
  border-color: var(--color-white);
}

.social-link.linkedin:hover {
  border-color: var(--color-accent-blue);
  color: var(--color-accent-blue);
}

.social-link.youtube:hover {
  border-color: var(--color-accent-red);
  color: var(--color-accent-red);
}

.social-name {
  font-weight: 600;
  font-size: 1.1rem;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.25rem 2.5rem;
  background: var(--color-accent-blue);
  color: var(--color-white);
  text-decoration: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all var(--transition-base);
  width: fit-content;
}

.cta-button:hover {
  background: #2563eb;
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(59, 130, 246, 0.4);
}

@media (max-width: 768px) {
  .social-links {
    grid-template-columns: 1fr;
  }

  .cta-button {
    width: 100%;
  }
}
</style>
