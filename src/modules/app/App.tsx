import { NavigationContainer } from '@react-navigation/native'
import React, { FunctionComponent, PropsWithChildren } from 'react'
import { ThemeProvider } from '../design'
import { ErrorProvider } from '../error'
import { ProjectProvider } from '../project'
import { MainNavigator } from './Navigator'

const providers: FunctionComponent<PropsWithChildren>[] = [
  ErrorProvider,
  ThemeProvider,
  ProjectProvider,
  NavigationContainer as FunctionComponent<PropsWithChildren>,
]

const App: FunctionComponent = () => {
  return providers.reduce(
    (children, Provider) => <Provider>{children}</Provider>,
    <MainNavigator />,
  )
}

export default App
