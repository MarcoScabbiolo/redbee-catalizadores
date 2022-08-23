import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { FunctionComponent } from 'react'
import { HomeNavigator } from './HomeNavigator'
import { TabRoutes, TabRoutesParamList } from './routes'
import Icon from 'react-native-vector-icons/Feather'
import { useTheme } from '../design'
import { Text } from 'react-native'
import { DiscoverNavigator } from './DiscoverNavigator'
import { ProfileNavigator } from './ProfileNavigator'

const Tab = createBottomTabNavigator<TabRoutesParamList>()

const icons = {
  [TabRoutes.Home]: 'home',
  [TabRoutes.Discover]: 'list',
  [TabRoutes.Profile]: 'user',
}

const labels = {
  [TabRoutes.Home]: 'Home',
  [TabRoutes.Discover]: 'Discover',
  [TabRoutes.Profile]: 'Me',
}

export const TabNavigator: FunctionComponent = () => {
  const theme = useTheme()
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabel: ({ color }) => (
          <Text style={{ color }}>{labels[route.name]}</Text>
        ),
        tabBarIcon: ({ color, size }) => (
          <Icon name={icons[route.name]} size={size} color={color} />
        ),
        tabBarInactiveTintColor: theme.colors.text,
        tabBarActiveTintColor: theme.colors.primary,
      })}>
      <Tab.Screen name={TabRoutes.Home} component={HomeNavigator} />
      <Tab.Screen name={TabRoutes.Discover} component={DiscoverNavigator} />
      <Tab.Screen name={TabRoutes.Profile} component={ProfileNavigator} />
    </Tab.Navigator>
  )
}
