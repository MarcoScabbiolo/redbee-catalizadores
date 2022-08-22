import { useContext } from 'react'
import { useObservableSubscription } from '../../shared'
import { ProjectRepositoryContext } from '../context'
import { Project } from '../domain'
import { ProjectRepository } from '../services'

export const useProjectRepository = (): ProjectRepository => {
  const repository = useContext(ProjectRepositoryContext)

  if (!repository) {
    throw new Error('No ProjectRepositoryContext')
  }

  return repository
}

export const useProjects = (): Project[] => {
  const repository = useProjectRepository()

  return useObservableSubscription(repository.projects) ?? []
}
