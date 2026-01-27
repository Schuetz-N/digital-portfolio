<script setup lang="ts">
import {socialLinks} from "@/data/contact.ts";
import {footerLabel} from "@/data/footer.ts";

const currentYear = new Date().getFullYear()

const getLink = (name: string) => {
  return socialLinks.find(link => link.name === name)?.url || '#'
}
</script>

<template>
  <footer class="footer">
    <div class="container">
      <p class="copyright">© {{ currentYear }} {{ footerLabel.copyrightMessage }}</p>
      <div class="footer-links">
        <a :href="getLink('GitHub')" target="_blank" rel="noopener noreferrer" class="footer-link">
          {{ footerLabel.linkOne }}
        </a>
        <a :href="getLink('LinkedIn')" target="_blank" rel="noopener noreferrer"
           class="footer-link">
          {{ footerLabel.linkTwo }}
        </a>
        <a :href="getLink('YouTube')" target="_blank" rel="noopener noreferrer" class="footer-link">
          {{ footerLabel.linkThree }}
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--color-gray-900);
  border-top: 1px solid var(--color-gray-800);
  padding: 2rem 0;
  margin-top: 4rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.copyright {
  color: var(--color-gray-300);
  font-size: 0.9rem;
}

.footer-links {
  display: flex;
  gap: 2rem;
}

.footer-link {
  color: var(--color-gray-300);
  text-decoration: none;
  transition: color var(--transition-fast);
  font-size: 0.9rem;
}

.footer-link:hover {
  color: var(--color-accent-blue);
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    text-align: center;
  }
}
</style>
