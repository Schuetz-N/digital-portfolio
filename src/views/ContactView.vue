<script setup lang="ts">
import {ref} from 'vue'
import ContactInfoCard from "@/components/contact/ContactInfoCard.vue";
import SocialMediaCard from "@/components/contact/SocialMediaCard.vue";
import {contactInfo, socialLinks} from "@/data/contact.ts";

const isVisible = ref(true)
</script>

<template>
  <div class="contact-view">
    <div class="container">
      <h1 class="page-title" :class="{ visible: isVisible }">{{ contactInfo.title }}</h1>
      <p class="page-subtitle" :class="{ visible: isVisible }">
        {{ contactInfo.subtitle }}
      </p>

      <div class="contact-content">
        <div :class="{ visible: isVisible }" :style="{ transitionDelay: '100ms' }">
          <ContactInfoCard :contact-info="contactInfo"/>
        </div>

        <div :class="{ visible: isVisible }" :style="{ transitionDelay: '200ms' }">
          <SocialMediaCard :social-links="socialLinks" :email="contactInfo.email"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-view {
  padding: 4rem 2rem;
  min-height: calc(100vh - 80px);
}

.container {
  max-width: 1000px;
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

.contact-content {
  display: grid;
  gap: 2rem;
}

.contact-content > div {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out;
}

.contact-content > div.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
