import { createContext } from 'react'
import { ProjectRepository } from '../services/ProjectRepository'

export const ProjectRepositoryContext = createContext<
  ProjectRepository | undefined
>(undefined)
