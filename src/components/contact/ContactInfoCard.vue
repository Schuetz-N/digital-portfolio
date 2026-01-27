<script setup lang="ts">
import {ContactRound, MailPlus, Phone, MapPinned} from "lucide-vue-next";
import type {ContactInfo} from '@/types/contact'
import {contactInfoCardLabel} from "@/data/contact.ts";

defineProps<{
  contactInfo: ContactInfo
}>()
</script>

<template>
  <div class="contact-info-card">
    <h2 class="card-title">{{ contactInfoCardLabel.title }}</h2>

    <div class="info-grid">
      <div class="info-item">
        <div class="info-icon">
          <ContactRound :size="24" :stroke-width="2"/>
        </div>
        <div>
          <p class="info-label">{{ contactInfoCardLabel.nameLabel }}</p>
          <p class="info-value">{{ contactInfo.name }}</p>
        </div>
      </div>

      <div class="info-item">
        <div class="info-icon">
          <MailPlus :size="24" :stroke-width="2"/>
        </div>
        <div>
          <p class="info-label"> {{ contactInfoCardLabel.emailLabel }} </p>
          <a :href="`mailto:${contactInfo.email}`" class="info-value link">
            {{ contactInfo.email }}
          </a>
        </div>
      </div>

      <div class="info-item">
        <div class="info-icon">
          <Phone :size="24" :stroke-width="2"/>
        </div>
        <div>
          <p class="info-label">{{ contactInfoCardLabel.phoneLabel }}</p>
          <a :href="`tel:${contactInfo.phone.replace(/\s/g, '')}`" class="info-value link">
            {{ contactInfo.phone }}
          </a>
        </div>
      </div>

      <div class="info-item">
        <div class="info-icon">
          <MapPinned :size="24" :stroke-width="2"/>
        </div>
        <div>
          <p class="info-label">{{ contactInfoCardLabel.locationLabel }}</p>
          <p class="info-value">{{ contactInfo.location }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-info-card {
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
  background: linear-gradient(
    90deg,
    var(--color-gray-200),
    var(--color-white),
    var(--color-gray-200)
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: title-shimmer 5s ease-in-out infinite;
}

@keyframes title-shimmer {
  0%, 100% {
    background-position: 0 center;
  }
  50% {
    background-position: 100% center;
  }
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.info-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.info-icon {
  font-size: 2rem;
  flex-shrink: 0;
  filter: drop-shadow(0 0 1px);
}

.info-label {
  color: var(--color-gray-400);
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
}

.info-value {
  color: var(--color-white);
  font-size: 1.1rem;
  font-weight: 500;
}

.info-value.link {
  color: var(--color-accent-blue);
  text-decoration: none;
  transition: all var(--transition-slow);
  display: inline-block;
}

.info-value.link:hover {
  color: #8ba4d0;
  font-size: 1.15rem;
}

@media (max-width: 768px) {
  .info-grid {
    grid-template-columns: 1fr;
  }
}
</style>
