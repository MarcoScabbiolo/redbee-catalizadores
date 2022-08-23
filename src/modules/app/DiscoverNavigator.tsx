import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { FunctionComponent } from 'react'
import { DiscoverRoutesParamList } from './routes'

const Stack = createNativeStackNavigator<DiscoverRoutesParamList>()

export const DiscoverNavigator: FunctionComponent = () => {
  return <Stack.Navigator screenOptions={{ headerShown: false }} />
}
