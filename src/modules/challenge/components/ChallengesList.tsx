import React, { FunctionComponent, useCallback } from 'react'
import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  ViewStyle,
} from 'react-native'
import { Challenge } from '../domain'
import { useAllChallenges } from '../hooks'
import { ChallengeCard } from './ChallengeCard'

export const ChallengesList: FunctionComponent = () => {
  const projects = useAllChallenges()

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Challenge>) => (
      <ChallengeCard challenge={item} style={styles.card} />
    ),
    [],
  )

  const keyExtractor = useCallback((item: Challenge) => item.name, [])

  return (
    <FlatList<Challenge>
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
