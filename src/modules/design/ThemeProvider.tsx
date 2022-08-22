import React, { FunctionComponent, PropsWithChildren, useRef } from 'react'
import { ThemeContext } from './context'
import { ThemeService } from './services'

export const ThemeProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const { current: service } = useRef(new ThemeService())

  return (
    <ThemeContext.Provider value={service}>{children}</ThemeContext.Provider>
  )
}
