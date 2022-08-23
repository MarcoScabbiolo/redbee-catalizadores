import React, { FunctionComponent, PropsWithChildren, useRef } from 'react'
import { ChallengeRepositoryContext } from './context'
import { ChallengeRepository } from './services'

export const ChallengeProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const { current: repository } = useRef(new ChallengeRepository())

  return (
    <ChallengeRepositoryContext.Provider value={repository}>
      {children}
    </ChallengeRepositoryContext.Provider>
  )
}
