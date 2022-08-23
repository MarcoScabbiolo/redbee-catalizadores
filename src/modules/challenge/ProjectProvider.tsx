import React, { FunctionComponent, PropsWithChildren, useRef } from 'react'
import { ProjectRepositoryContext } from './context'
import { ProjectRepository } from './services'

export const ProjectProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const { current: repository } = useRef(new ProjectRepository())

  return (
    <ProjectRepositoryContext.Provider value={repository}>
      {children}
    </ProjectRepositoryContext.Provider>
  )
}
