import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { FunctionComponent } from 'react'
import { HomeRoutes, HomeRoutesParamList } from './routes'
import { HomeScreen } from './screens'

const Stack = createNativeStackNavigator<HomeRoutesParamList>()

export const HomeNavigator: FunctionComponent = () => {
  return (
    <Stack.Navigator
      initialRouteName={HomeRoutes.Home}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name={HomeRoutes.Home} component={HomeScreen} />
    </Stack.Navigator>
  )
}
