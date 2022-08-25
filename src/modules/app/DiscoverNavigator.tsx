import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { FunctionComponent } from 'react'
import { DiscoverRoutes, DiscoverRoutesParamList } from './routes'
import { DiscoverScreen } from './screens'

const Stack = createNativeStackNavigator<DiscoverRoutesParamList>()

export const DiscoverNavigator: FunctionComponent = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={DiscoverRoutes.Discover} component={DiscoverScreen} />
    </Stack.Navigator>
  )
}
