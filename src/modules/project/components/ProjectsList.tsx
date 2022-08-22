import React, { FunctionComponent, useCallback } from 'react'
import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  ViewStyle,
} from 'react-native'
import { Project } from '../domain'
import { useProjects } from '../hooks'
import { ProjectCard } from './ProjectCard'

export const ProjectsList: FunctionComponent = () => {
  const projects = useProjects()

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Project>) => (
      <ProjectCard project={item} style={styles.card} />
    ),
    [],
  )

  const keyExtractor = useCallback((item: Project) => item.name, [])

  return (
    <FlatList<Project>
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      data={projects}
    />
  )
}

const styles = StyleSheet.create<{
  card: ViewStyle
}>({
  card: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
})
