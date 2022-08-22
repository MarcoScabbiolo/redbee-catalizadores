import React, { FunctionComponent, useCallback } from 'react'
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useTheme } from '../../design'
import { Card } from '../../shared'
import { Project, projectStatusLabel } from '../domain/Project'

export interface ProjectCardProps {
  project: Project
  style?: StyleProp<ViewStyle>
}

export const ProjectCard: FunctionComponent<ProjectCardProps> = ({
  project,
  style,
}) => {
  const theme = useTheme()

  const navigateToProject = useCallback(() => {}, [])

  return (
    <Card onPress={navigateToProject} style={style}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.colors.text }]}>
          {project.name}
        </Text>
        <Icon
          style={styles.icon}
          name="chevron-right"
          color={theme.colors.primary}
          size={20}
        />
      </View>
      <Text style={[styles.description, { color: theme.colors.text }]}>
        {project.description}
      </Text>
      <Text style={[styles.status, { color: theme.colors.text }]}>
        {projectStatusLabel(project.status)}
      </Text>
    </Card>
  )
}

const styles = StyleSheet.create<{
  header: ViewStyle
  icon: ViewStyle
  title: TextStyle
  description: TextStyle
  status: TextStyle
  status: TextStyle
}>({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  icon: {
    position: 'relative',
    top: -5,
  },
  description: {
    marginBottom: 15,
  },
  status: {
    alignSelf: 'flex-end',
    fontWeight: 'bold',
  },
})
