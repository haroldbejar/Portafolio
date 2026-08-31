export interface Project {
  id: string
  slug: string
  title: string
  shortDescription: string
  description: string
  problem?: string
  solution?: string
  features: string[]
  technologies: string[]
  coverImage: string
  gallery?: string[]
  architectureImage?: string
  demoUrl?: string
  repositoryUrl?: string
  featured: boolean
}