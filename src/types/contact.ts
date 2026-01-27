export interface ContactInfo {
  title: string,
  subtitle: string,
  name: string
  email: string
  phone: string
  location: string
}

export interface SocialLink {
  name: string
  url: string
  icon: 'github' | 'linkedin' | 'youtube'
}

export interface ContactInfoCardLabel {
  title: string,
  nameLabel: string,
  emailLabel: string,
  phoneLabel: string,
  locationLabel: string,
}

export interface SocialMediaCardLabel {
  title: string,
  description: string,
  buttonLabel: string,
}
