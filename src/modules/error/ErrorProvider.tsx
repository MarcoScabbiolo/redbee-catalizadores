import React, { FunctionComponent, PropsWithChildren, useRef } from 'react'
import { ErrorContext } from './context'
import { ErrorService } from './services'

export const ErrorProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const { current: service } = useRef(new ErrorService())

  return (
    <ErrorContext.Provider value={service}>{children}</ErrorContext.Provider>
  )
}
