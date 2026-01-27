import type {
  ContactInfo,
  ContactInfoCardLabel,
  SocialLink,
  SocialMediaCardLabel
} from "@/types/contact.ts";

export const contactInfo: ContactInfo = {
  title: "Contact",
  subtitle: "Ready for the next challenge",
  name: import.meta.env.VITE_CONTACT_NAME || 'Your Name',
  email: import.meta.env.VITE_CONTACT_EMAIL || 'email@example.com',
  phone: import.meta.env.VITE_CONTACT_PHONE || '+49 xxx',
  location: import.meta.env.VITE_CONTACT_LOCATION || 'Location'
}

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: import.meta.env.VITE_GITHUB_URL || 'https://github.com',
    icon: 'github' as const
  },
  {
    name: 'LinkedIn',
    url: import.meta.env.VITE_LINKEDIN_URL || 'https://linkedin.com',
    icon: 'linkedin' as const
  },
  {
    name: 'YouTube',
    url: import.meta.env.VITE_YOUTUBE_URL || 'https://youtube.com',
    icon: 'youtube' as const
  }
]

export const contactInfoCardLabel: ContactInfoCardLabel = {
  title: 'Contact information',
  nameLabel: 'Name',
  emailLabel: 'E-Mail',
  phoneLabel: 'Phone',
  locationLabel: 'Location',
}

export const socialMediaCardLabel: SocialMediaCardLabel = {
  title: 'Social Media',
  description: 'Follow me on social media for updates and new projects',
  buttonLabel: 'Send E-Mail',
}
