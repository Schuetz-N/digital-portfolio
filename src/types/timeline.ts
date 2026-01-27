export interface ResumeLabel {
  title: string,
  subtitle: string,
}

export interface TimelineItem {
  id: string
  title: string
  organization: string
  period: string
  description: string
  type: 'education' | 'work' | 'certification'
}
