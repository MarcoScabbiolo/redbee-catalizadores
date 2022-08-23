import React, { FunctionComponent, PropsWithChildren, useRef } from 'react'
import { SessionContext } from './context'
import { SessionService } from './services'

export const UserProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const { current: service } = useRef(new SessionService())

  return (
    <SessionContext.Provider value={service}>
      {children}
    </SessionContext.Provider>
  )
}
