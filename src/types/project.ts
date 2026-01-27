export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  videoId?: string
  image?: string
}

export interface ProjectLabel {
  title: string,
  subtitle: string,
  buttonLabelGit: string,
  buttonLabelDemo?: string,
}
