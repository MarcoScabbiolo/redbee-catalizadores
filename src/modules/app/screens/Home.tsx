import React, { FunctionComponent, useCallback } from 'react'
import { useTheme } from '../../design'
import Icon from 'react-native-vector-icons/Feather'
import { Button, Screen } from '../../shared'
import { ProjectsList } from '../../project'

export const HomeScreen: FunctionComponent = () => {
  const theme = useTheme()

  const addNew = useCallback(() => {}, [])

  return (
    <Screen
      title="Proyectos"
      headerRight={
        <Button
          onPress={addNew}
          left={
            <Icon name="plus-circle" color={theme.colors.onPrimary} size={25} />
          }>
          Nuevo
        </Button>
      }>
      <ProjectsList />
    </Screen>
  )
}
