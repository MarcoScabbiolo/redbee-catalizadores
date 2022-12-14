import { NavigationContainer } from '@react-navigation/native'
import React, { FunctionComponent, PropsWithChildren } from 'react'
import { ThemeProvider } from '../design'
import { ErrorProvider } from '../error'
import { ChallengeProvider } from '../challenge'
import { TabNavigator } from './TabNavigator'
import { UserProvider } from '../user'
import { NewsProvider } from '../news'

const providers: FunctionComponent<PropsWithChildren>[] = [
  ErrorProvider,
  ThemeProvider,
  UserProvider,
  ChallengeProvider,
  NewsProvider,
  NavigationContainer as FunctionComponent<PropsWithChildren>,
]

const App: FunctionComponent = () => {
  return providers.reduce(
    (children, Provider) => <Provider>{children}</Provider>,
    <TabNavigator />,
  )
}

export default App
