export interface Skill {
  id: string
  name: string
  category: 'frontend' | 'backend' | 'tools' | 'other'
  level: number
  icon?: string
}

export interface SkillLabel {
  title: string
  subtitle: string
  categoryTitle: {
    frontend: string
    backend: string
    tools: string
  }
}
