import React, { FunctionComponent, PropsWithChildren, useRef } from 'react'
import { NewsContext } from './context'
import { NewsRepository } from './services'

export const NewsProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const { current: repository } = useRef(new NewsRepository())

  return (
    <NewsContext.Provider value={repository}>{children}</NewsContext.Provider>
  )
}
