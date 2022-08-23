import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { FunctionComponent } from 'react'
import { ProfileScreen } from '../user'
import { ProfileRoutes, ProfileRoutesParamList } from './routes'

const Stack = createNativeStackNavigator<ProfileRoutesParamList>()

export const ProfileNavigator: FunctionComponent = () => {
  return (
    <Stack.Navigator
      initialRouteName={ProfileRoutes.Profile}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ProfileRoutes.Profile} component={ProfileScreen} />
    </Stack.Navigator>
  )
}
