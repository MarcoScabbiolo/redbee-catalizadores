import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { FunctionComponent } from 'react'
import { MainRoutes } from './routes'
import { HomeScreen } from './screens'

const Stack = createNativeStackNavigator()

export const MainNavigator: FunctionComponent = () => {
  return (
    <Stack.Navigator
      initialRouteName={MainRoutes.Home}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name={MainRoutes.Home} component={HomeScreen} />
    </Stack.Navigator>
  )
}
