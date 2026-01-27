import type {Project, ProjectLabel} from '../types/project'

export const projectLabel: ProjectLabel = {
  title: 'Projects',
  subtitle: 'Selected Work and Demos',
  buttonLabelGit: 'GitHub',
  buttonLabelDemo: 'Live',
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Digital-Portfolio',
    description: 'This project serves as my digital business card and portfolio, ' +
      'built with Vue 3 and TypeScript to ensure a scalable, ' +
      'maintainable, and type-safe codebase. ' +
      'The goal was to create a sleek, fast, ' +
      'and responsive user experience that highlights my personal background ' +
      'and professional summary. ' +
      'It features a detailed timeline of my career and education, ' +
      'alongside a curated list of my development projects ' +
      'and a comprehensive overview of my technical proficiencies.',
    technologies: ['Vue 3', 'TypeScript'],
    githubUrl: 'https://github.com/Schuetz-N/digital-portfolio',
    liveUrl: 'https://schuetz-n.github.io/digital-portfolio/',
    videoId: 'dQw4w9WgXcQ'
  },
  {
    id: '2',
    title: 'Project Title 2',
    description: 'Description.',
    technologies: ['Java', 'Spring Boot', 'TypeScript', 'Vue3', 'MSSQL'],
    githubUrl: 'https://github.com/yourusername/project2',
    videoId: 'dQw4w9WgXcQ'
  },
  {
    id: '3',
    title: 'Project Title 3',
    description: 'Description.',
    technologies: ['Java', 'Spring Boot', 'MSSQL'],
    githubUrl: 'https://github.com/yourusername/project3',
    videoId: 'dQw4w9WgXcQ'
  }

]
