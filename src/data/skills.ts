import type {Skill, SkillLabel} from '../types/skill'

export const skills: Skill[] = [
  {id: '1', name: 'Vue.js', category: 'frontend', level: 65, icon: 'vuejs'},
  {id: '2', name: 'TypeScript', category: 'frontend', level: 65, icon: 'typescript'},
  {id: '3', name: 'Java', category: 'backend', level: 70, icon: 'java'},
  {id: '4', name: 'Spring Boot', category: 'backend', level: 70, icon: 'springboot'},
  {id: '5', name: 'Python', category: 'backend', level: 50, icon: 'python'},
  {id: '6', name: 'Git', category: 'tools', level: 85, icon: 'git'},
  {id: '7', name: 'GitHub', category: 'tools', level: 80, icon: 'github'},
  {id: '8', name: 'Azure DevOps', category: 'tools', level: 80, icon: 'azuredevops'},
  {id: '9', name: 'Docker', category: 'tools', level: 65, icon: 'docker'},
  {id: '10', name: 'Jira', category: 'tools', level: 75, icon: 'jira'},
]

export const skillLabel: SkillLabel = {
  title: 'Qualifications',
  subtitle: 'Technologies and Tools',
  categoryTitle: {
    backend: 'Backend',
    frontend: 'Frontend',
    tools: 'Tools & DevOps',
  }
}
