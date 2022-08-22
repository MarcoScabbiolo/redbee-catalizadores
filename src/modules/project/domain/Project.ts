import { ProjectStatus } from './ProjectStatus'

export interface Project {
  status: ProjectStatus
  name: string
  description: string
}

export const projectStatusLabel = (status: ProjectStatus): string =>
  ProjectStatus[status]
